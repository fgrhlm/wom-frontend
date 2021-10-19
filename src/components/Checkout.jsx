import { useState, useEffect } from "react";
import axios from "axios";

const Checkout = () => {
    const serviceApiUrl = "http://wom2.spionsatellit.com"
    const cabinApiUrl = "https://wom1.spionsatellit.com/cabin"

    const [orders, setOrders] = useState([])
    const [services, setServices] = useState([])
    const [cabins, setCabins] = useState([])
    const [updateOrders, setUpdateOrders] = useState(false)

    const [selectedService, setSelectedService] = useState("");
    const [selectedCabin, setSelectedCabin] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    const orderObjectToText = (o) => {
        const filteredCabins = cabins.filter(c => c["_id"] === o["cabin_id"]);
        const filteredServices = services.filter(s => s["_id"] === o["service_id"]);

        return [filteredCabins[0], filteredServices[0]];
    }

    const fetchServices = async () => {
        try{
            const res = await axios.get(`${serviceApiUrl}/service`);
            setServices(res.data);
        }catch (e) {
            console.log(e);
        }
    }

    const fetchCabins = async () => {
        try{
            // CORS fix i dev
            const res = await axios({
                method: "GET",
                url: cabinApiUrl,
                withCredentials: false
            });
            setCabins(res.data);
        }catch (e) {
            console.log(e);
        }
    }

    const fetchOrders = async () => {
        try{
            const res = await axios.get(`${serviceApiUrl}/order`)

            setOrders(res.data);
        } catch (e){
            console.log(e);
        }
    }

    const submitOrder = async (order) => {
        const res = await axios.post(`${serviceApiUrl}/order`,order);
        console.log(res);
        return res.status;
    }

    // Once
    useEffect(() => {
        // Hämta data
        fetchServices();
        fetchCabins();
        fetchOrders();
    },[])

    // Vid submit 
    useEffect(() => {
        fetchOrders();
        setUpdateOrders(false);
    }, [updateOrders])

    return (
        <div>
            <div className="smaller-container">
                <h3>Beställ en tjänst</h3>
                <label htmlFor="services">Tjänst</label>
                <select value={selectedService} name="services" id="services" onChange={(e) => {
                    setSelectedService(e.target.value);
                }}>
                    <option>Välj en tjänst</option>
                    { services.length > 0 &&
                        services.map(s => {
                            return <option key={s["_id"]} value={s["_id"]}>{s["service_name"]}</option>
                        })
                    }
                </select>
                <label htmlFor="cabins">Stuga</label>
                <select value={selectedCabin} name="cabins"  id="cabins" onChange={(e) => {
                    setSelectedCabin(e.target.value);
                }}>
                    <option>Välj en stuga</option>
                    { cabins.length > 0 &&
                        cabins.map(c => {
                            return <option key={c["_id"]} value={c["_id"]}>{c["address"]}</option>
                        })
                    }
                </select>
                <label htmlFor="date">När?</label>
                <input type="date" id="date" onChange={(e) => {
                    setSelectedDate(e.target.value);
                }}/>
                <button onClick={() => {
                    if(selectedService !== "" && selectedCabin !== "" && selectedDate !== ""){
                        submitOrder({
                            "service_id": selectedService,
                            "cabin_id": selectedCabin,
                            "date": selectedDate
                        })

                        setUpdateOrders(true);
                    }else{
                        alert("Ajj ajj, fyll i allt!");
                    }
                }}>Beställ!</button>
            </div>
            <div className="smaller-container">
                <h3>Beställda tjänster</h3>
                <ul>
                    { orders.length > 0 &&
                        orders.map(o => {
                            const [cabin, service] = orderObjectToText(o);
                            if(cabin && service){
                                return (
                                    <li key={o["_id"]} >
                                        <p><b>Stuga:</b> {
                                            cabin["address"]    
                                        }</p>
                                        <p><b>Tjänst:</b> {
                                            service["service_name"]
                                        }</p>
                                        <p><b>Datum:</b>{
                                            o["date"]
                                        }</p>
                                        <p><b>Pris:</b>{
                                            service["price"]
                                        }<b>€</b></p>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Checkout;