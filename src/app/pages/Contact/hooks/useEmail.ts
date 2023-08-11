import { send } from "emailjs-com";
import { toast } from "react-toastify";
import { useState, useRef, useEffect } from "react";
import { inputs } from "../types/emailTypes";
import axios from 'axios';

export default function useEmail() {
  toast.configure();

  // Remember to define types for new .env vars in environment.d.ts flle
  const publicKey: string = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const templateId: string = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const serviceID: string = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const abstractAPIKey: string = process.env.REACT_APP_ABSTRACT_API_KEY;
  const abstractURL: string =`https://emailvalidation.abstractapi.com/v1/?api_key=${abstractAPIKey}`

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
  const [checkingEmail, setCheckingEmail] = useState<boolean>();
  const [possValidEmail, setPossValidEmail] = useState<boolean>();

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
      setPossValidEmail(true);
    } else if (e?.target?.name === "email" && e?.target?.value?.length === 0) {
      setEmailInputWarning(false);
    } else if (
      e?.target?.name === "email" &&
      e?.target?.value?.length !== 0 &&
      !emailReg.test(e?.target?.value)
    ) {
      setEmailInputWarning(true);
      setCheckingEmail(true);
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

  const sendEmail = async () => {

   const isEmailValid = await emailValidation(inputs?.email);

   if (isEmailValid === 'DELIVERABLE') {
    notifyEmailValid();
    send(serviceID, templateId, inputs, publicKey)
      .then((res) => {
        // emailjs.send.reset();
        console.log(res.text);

        notifySuccess();
        clearForm();
        setSubCount(subCount + 1);

        if (subCount === 1 && !allowRedoMessage) {
          notifyLastAttempt();
          setAllowRedoMessage(true);
        } else if (allowRedoMessage === true) {
          lastAttemptSentConfirmation();
          setAllowRedoMessage(false);
        }

      })
      .catch((err) =>
        console.error("Submission Error. Error details: ", err, notifyFailure())
      );
    } else {
      setEmailInputWarning(true);
      notifyEmailInalid();
    }

  };

  const emailValidation = async (email: string|undefined) => {
    try {
      const response = await axios.get(`${abstractURL}&email=${email}`);
      return response?.data?.deliverability;
    } catch (err) {
      console.log(err)
    }
  }

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const maxedOutMsgSubmissions = await localStorage.getItem('maxedOutMsgSubmissions');
    
    if (subCount > 1 || maxedOutMsgSubmissions === 'true') {
      notifyMessageReceived();
    }
    else if (
      !inputs?.email ||
      !inputs?.message ||
      !inputs?.name ||
      !inputs?.subject
    ) {
      notifyEmptyFields();
    } else if (emailInputfieldWarning || !emailReg.test(inputs?.email)) {
      notifyEmailIssue();
    } else if (subCount === 0 && !allowRedoMessage) {
      sendEmail();
    } else if (subCount === 1 && !allowRedoMessage) {
      sendEmail();
    } else if (allowRedoMessage === true) {
      sendEmail();
      localStorage.setItem('maxedOutMsgSubmissions', 'true')
    } 

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

  const notifyEmptyFields = () => {
    toast.error("😨 Please fill in all the form fields!", {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
    });
  };

  const notifySuccess = () => {
    toast.success(`😀 Thank you ${inputs?.name} for your message!`, {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      autoClose: 15000,
    });
  };

  const notifyEmailValid = () => {
    toast.success(`✅ Your email: ${inputs?.email} has been verified!`, {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true
    });
  };

  const notifyEmailInalid = () => {
    toast.error(`❌ I couldn't validate your email: ${inputs?.email}. Please check for errors or try a different email.`, {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      autoClose: 15000,
    });
  };

  const notifyEmailIssue = () => {
    toast.warning(
      `🕵🏾 There's a problem with your email. Please check it's correct.`,
      { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true }
    );
  };

  const notifyFailure = () => {
    toast.error(
      `🤔 Unforutnately there was a problem sending your message. Please try again later.`,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
      }
    );
  };

  useEffect(() => {
    if (checkingEmail) {
    toast.warning(`👀 I'm not sure your email looks right... Did you make a typo?`, {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      autoClose: 2500,
    });
    setPossValidEmail(false)
  }
  }, [checkingEmail]);

  useEffect(() => {
    if (possValidEmail) {
    toast.success(`Email is formatted correctly! Nice 👍`, {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      autoClose: 2500,
    });
    setCheckingEmail(false)
  }

}, [possValidEmail]);

  const notifyMessageReceived = () => {
    toast.warning(`🙏 You have already sent 3 messages and I have received them. I will get back to you.`, {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
    });
  };

  const notifyLastAttempt = () => {
    toast.success(
      `😀 Thank you ${inputs?.name} for your message!. I will get back to you! Your next message will be your last attempt. Take care!`,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 15000,
      }
    );
  };

  const lastAttemptSentConfirmation = () => {
    toast.warning(
      `🙏 This was your last attempt to redo the message. If you still made an error don't worry I will get back to you regardless`,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 15000,
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
