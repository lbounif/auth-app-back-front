import { useState, useEffect} from 'react'
import {Form, Button } from 'react-bootstrap'
import { Country, State, City }  from 'country-state-city'

const ThirdStep = () => {
    const [countries, setCountries] = useState([])
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=> {
        const getCountries = async () => {
            try{
                setIsLoading(true);
                const result = await Country.getAllCountries()
                console.log(result)
                let allCountries =result?.map(({isoCode, name})=> ({
                    isoCode,
                    name
                }))
                setCountries(allCountries)
                setIsLoading(true);
            }catch(e){
                setCountries([])
                setIsLoading(true);
            }
        }
        getCountries()
    }, [])
    const handleSubmit = async(event) => {
        //go to login page: useNavigate()
        //API call to register the user -> use axios.post
        //use try catch for API call
        //swal.fire('Awsome!', "You are successfully registred!", 'success')
    }
    return (
        <Form className="input-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="firstName">
                {isLoading && (
                    <p>Loading countries. Please wait...</p>
                )}
                <Form.Label>Country</Form.Label>
                <Form.Control 
                    as="select"
                    name="country" 
                >
                {
                    countries.map(({isoCode, name})=> (
                        <option key={isoCode}>{name}</option>
                    ))
                }
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>State</Form.Label>
                <Form.Control 
                    as="select" 
                    value={"Algeria"} >
                 </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" className="btn">
                Suivant
            </Button>
        </Form>
    )
}
export default ThirdStep