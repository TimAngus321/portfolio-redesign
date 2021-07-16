import {useState}  from 'react';

export default function useForm(initial = {}) {

    const [inputs, setInputs] = useState(initial);

    function handleChange(e) {
        e.preventDefault();
        
        let { value, name, type} = e.target;

        if (inputs === '') {
            console.log('Inputs cannot be empty')
        }


        setInputs({
            // copy existing state
            ...inputs,
            [e.target.name]: e.target.value
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
    };
}