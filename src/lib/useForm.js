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
    
    function clearForm() {
        const blankState = Object.fromEntries(
          Object.entries(inputs).map(([key, value]) => [key, ''])
        );
        setInputs(blankState);
      }
 
        return {
            inputs,
            handleChange,
            clearForm,
        };

}