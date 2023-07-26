import { send } from "emailjs-com";
import { toast } from "react-toastify";
import { useState, useRef } from "react";
import { inputs } from "../types/emailTypes";

export default function useEmail() {
  toast.configure();

  const userID: string = process.env.REACT_APP_EMAILJS_USER_ID;
  const templateId: string = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const serviceID: string = process.env.REACT_APP_EMAILJS_SERVICE_ID;

  const initial: Record<string, unknown> = {};
  const emailReg: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  // old email validation regex - revert back if there's issues with streamlined version above
  // const emailReg: RegExp =
  //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const form = useRef<HTMLButtonElement>(null);
  const [inputs, setInputs] = useState<inputs>(initial);
  const [subCount, setSubCount] = useState<number>(0);
  const [allowRedoMessage, setAllowRedoMessage] = useState<boolean>(false);
  const [nameEmpty, setNameEmpty] = useState<boolean>(false);
  const [emailEmpty, setEmailEmpty] = useState<boolean>(false);
  const [subjectEmpty, setSubjectEmpty] = useState<boolean>(false);
  const [msgEmpty, setMsgEmpty] = useState<boolean>(false);
  const [emailInputfieldWarning, setEmailInputWarning] =
    useState<boolean>(false);

  function handleChange(e: any) {
    e.preventDefault();

    const { value, name } = e.target;

    setInputs({
      // copy existing state
      ...inputs,
      [name]: value,
    });

    // Must use e target so that state is updated immediately
    if (e?.target?.name === "name" && e?.target?.value?.length !== 0)
      setNameEmpty(false);

    if (e?.target?.name === "email" && e?.target?.value?.length !== 0)
      setEmailEmpty(false);

    if (e?.target?.name === "email" && emailReg.test(e?.target?.value)) {
      setEmailInputWarning(false);
    } else if (e?.target?.name === "email" && e?.target?.value?.length === 0) {
      setEmailInputWarning(false);
    } else if (
      e?.target?.name === "email" &&
      e?.target?.value?.length !== 0 &&
      !emailReg.test(e?.target?.value)
    ) {
      setEmailInputWarning(true);
    }

    if (e?.target?.name === "subject" && e?.target?.value?.length !== 0)
      setSubjectEmpty(false);

    if (e?.target?.name === "message" && e?.target?.value?.length !== 0)
      setMsgEmpty(false);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ""])
    );
    setInputs(blankState);
  }

  const sendEmail = () => {
    send(serviceID, templateId, inputs, userID)
      .then((res) => {
        // emailjs.send.reset();
        console.log(res.text);

        // After successful submission update submission count state
        setSubCount(subCount + 1);
      })
      .catch((err) =>
        console.error("Submission Error. Error details: ", err, notifyFailure())
      );
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (
      !inputs?.email ||
      !inputs?.message ||
      !inputs?.name ||
      !inputs?.subject
    ) {
      notifyErrors();
    } else if (!emailReg.test(inputs?.email)) {
      notifyEmailIssue();
    } else if (subCount === 0 && !allowRedoMessage) {
      sendEmail();
      notifySuccess();
      clearForm();
    } else if (subCount === 1 && !allowRedoMessage) {
      sendEmail();
      notifyLastAttempt();
      clearForm();
      setAllowRedoMessage(true);
    } else if (allowRedoMessage === true) {
      allowRedoMesage();
      sendEmail();
      setAllowRedoMessage(false);
    } else {
      notifyMessageReceived();
    }

    console.log(inputs);

    // Name field check
    if (!inputs?.name) {
      setNameEmpty(true);
    } else {
      setNameEmpty(false);
    }

    // email field check
    if (!inputs?.email) {
      setEmailEmpty(true);
      setEmailInputWarning(false);
    } else if (!emailReg.test(inputs?.email)) {
      setEmailInputWarning(true);
    } else {
      setEmailEmpty(false);
    }

    // subject field check
    if (!inputs?.subject) {
      setSubjectEmpty(true);
    } else {
      setSubjectEmpty(false);
    }

    // msg field check
    if (!inputs?.message) {
      setMsgEmpty(true);
    } else {
      setMsgEmpty(false);
    }
  };

  const notifyErrors = () => {
    toast.error("😨 Please fill in all the form fields!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
    });
  };

  const notifySuccess = () => {
    toast.success(`😀 Thank you ${inputs?.name} for your message!`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
      autoClose: 20000,
    });
  };

  const notifyEmailIssue = () => {
    toast.warning(
      `🕵🏾 There's a problem with your email. Please check it's correct.`,
      { position: toast.POSITION.BOTTOM_RIGHT, hideProgressBar: true }
    );
  };

  const notifyFailure = () => {
    toast.error(
      `🤔 Unforutnately there was a problem sending your message. Please try again later.`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: true,
      }
    );
  };

  // Stop allowing submissions after 2 to prevent spamming and overloading emailJS. If they need to correct something allow them to click within the notification to send again.

  const notifyMessageReceived = () => {
    toast.warning(`🙏 I have received your message. I will get back to you!`, {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
    });
  };

  const notifyLastAttempt = () => {
    toast.success(
      `😀 Thank you ${inputs?.name} for your message!. I will get back to you! Your next message will be your last attempt. Take care!`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: true,
        autoClose: 20000,
      }
    );
  };

  const allowRedoMesage = () => {
    toast.warning(
      `🙏 This was your last attempt to redo the message. If you still made an error don't worry I will get back to you regardless`,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        hideProgressBar: true,
        autoClose: 20000,
      }
    );
  };

  return {
    onSubmit,
    inputs,
    handleChange,
    clearForm,
    form,
    emailInputfieldWarning,
    nameEmpty,
    emailEmpty,
    subjectEmpty,
    msgEmpty,
  };
}
