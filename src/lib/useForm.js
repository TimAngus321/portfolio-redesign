import {useState, useRef}  from 'react';
import { toast } from 'react-toastify';
import { emailjs } from 'emailjs-com';



export default function useForm(initial = {}) {

    const [inputs, setInputs] = useState(initial);
    const form = useRef();


    function handleChange(e) {


        e.preventDefault();
        
        let { value, name} = e.target;

        if (inputs === '') {
            console.log('Inputs cannot be empty')
        }


        setInputs({
            // copy existing state
            ...inputs,
            [name]: value,
        })
    }
    
    function checkErrors() {
        if (inputs === '') {
            console.log('Inputs cannot be empty')
        }
    }

    // function resetForm() {
    //     setInputs(initial);
    // }

    // function clearForm() {
    //     const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));
    //     setInputs(blankState);
    // }        
 
        return {
            inputs,
            handleChange,
            // resetForm,
            // clearForm,
            checkErrors,
            // onSubmit,
        };

}