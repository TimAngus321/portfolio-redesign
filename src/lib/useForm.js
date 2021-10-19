import {useState}  from 'react';

export default function useForm(initial = {}) {

    const [inputs, setInputs] = useState(initial);


    function handleChange(e) {


        e.preventDefault();
        
        let { value, name} = e.target;

        setInputs({
            // copy existing state
            ...inputs,
            [name]: value,
        })
    }      
 
        return {
            inputs,
            handleChange,
        };

}