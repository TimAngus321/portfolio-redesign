import React from 'react';
import { init, emailjs } from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SMTPClient } from 'emailjs';


export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            subject: "",
            feedback: "",
        }
    }

    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        const value = target.value;

    this.setState({ [name]: value })
    }

    sendMessage(event) {
      event.preventDefault();

      const client = new SMTPClient({
        user: 'user',
        password: 'password',
        host: 'smtp.your-email.com',
        ssl: true,
    });

  const templateParams = {
        from_name: this.state.name + " (" + this.state.email + ")",
        to_name: "Timothy Angus",
        feedback: this.state.feedback
      };
  emailjs
        .send("gmail", "portfoliositecontact", 'service_cqvp8hl', 'template_8ahjk2c', templateParams)
        .then(
          function(response) {
            toast.success("Your message has successfully sent!", {
              position: toast.POSITION.BOTTOM_CENTER
            });
            console.log("SUCCESS!", response.status, response.text);
          },
          function(err) {
            toast.error("Your message was not able to be sent");
          }
        );
  this.setState({
        name: "",
        email: "",
        message: ""
      });
    }

  
    
    render() {
        return(
            <div className="contact-container">
            <h1>Contact Me</h1>
            <form 
                className="contact-form"
                id={this.props.id}
                name={this.props.name}
                method={this.props.method}
                action={this.props.action}
                onSubmit={handleSubmit}
            >
            <textarea 
            id="name"
            name="name"
            onChange={this.handleInputChange.bind(this)}
            placeholder="Your name"
            required
            value={this.state.name}
            style={{ width: "100%" }}
            rows={1}
            >
            </textarea>

            <textarea 
            id="email"
            name="email"
            onChange={this.handleInputChange.bind(this)}
            placeholder="Your email address"
            required
            value={this.state.email}
            style={{ width: "100%" }}
            rows={1}
            >
            </textarea>

            <textarea 
            id="subject"
            name="subject"
            onChange={this.handleInputChange.bind(this)}
            placeholder="Subject"
            required
            value={this.state.subject}
            style={{ width: "100%" }}
            rows={1}
            >
            </textarea>
            
            <textarea 
            id="feedback"
            name="feedback"
            onChange={this.handleInputChange.bind(this)}
            placeholder="Your message"
            required
            value={this.state.feedback}
            style={{ width: "100%" }}
            rows={1}
            >
            </textarea>
            <input
            type="button"
            value="Send"
            className="contact-form button"
            style={{
              fontFamily: "Amatic SC",
              fontSize: "20px",
              color: "orange"
            }}
            onClick={this.sendMessage.bind(this)}
          />
            </form>
            </div>
        )
    }
}

