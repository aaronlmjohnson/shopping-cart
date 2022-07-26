const QuantitySelect = (props)=>{
    const {setQuantity, id} = props;

   return (<>
    <label htmlFor="quantity">Quantity</label>
    <select className="quantity" name="quantity" onChange={(e)=>setQuantity(e.target.value)}>
        {[0,1,2,3,4,5,6,7,8,9,10].map((value)=> <option key={`${id}-${value}`}value={`${value}`}>{value}</option>)}
    </select>
   </>);
}

export default QuantitySelect;