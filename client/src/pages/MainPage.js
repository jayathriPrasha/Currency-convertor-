import React ,{ useState} from 'react'

export default function MainPage() {
  
  // the states for the fields
  const [date, Setdate] = useState();
  const [sourceCurrency, setsourceCurrency] = useState("");
  const [targetCurrency, settargetCurrency] = useState("");
  const [amountInSourceCurrency, setamountInSourceCurrency] = useState(0);
  const [amountInTargetCurrency, setamountInTargetCurrency] = useState(0);
 
  //handel the on submit
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(
      date,
      setsourceCurrency,
      targetCurrency,
      amountInSourceCurrency
    );
  };

  return (
    <div>
      <h1 className='lg:mx-32 text-5xl font-bold text-green-500' >convert your currencies Today</h1>
      <p className='lg:mx-32 opacity-40 py-6'>Check the currency rates against all the world currencies here.
         The currency converter below is easy to use and the currency rates are updated frequently.
         This is very much needed given the extreme volatility in global currencies lately.</p>

         
         <div className=" mt-5 flex items-center justify-center flex-col">
          <section className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit}>
              <div>
              <div className="mb-4">

              <label htmlfor= {date}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>

              <input 
              onChange={(e) => Setdate(e.target.value)}
              type="date" 
              id= {date} 
              name = {date}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500
               dark:focus:border-green-500" 
               placeholder="" required/>
              </div>



              <div className="mb-4">
              <label htmlfor= {sourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source of currancy</label>
             <select 
             onChange={(e) => setsourceCurrency(e.target.value)}
             id={sourceCurrency} 
             name ={sourceCurrency} 
             valuve ={sourceCurrency} 
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
              focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"  placeholder="" required>
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
              </div>

              <div className="mb-4">
              <label htmlfor= {targetCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select traget currancy</label>
             <select 
             onChange={(e) => settargetCurrency(e.target.value)}
             id={targetCurrency} 
             name ={targetCurrency} 
             valuve ={targetCurrency} 
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
              focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="" required>
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
              </div>

              <div class="mb-5">
              <label htmlfor= {amountInSourceCurrency} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount of Source currancy</label>
              <input 
               onChange={(e) => setamountInSourceCurrency(e.target.value)}
              type="Number" 
              id={amountInSourceCurrency} 
              name ={amountInSourceCurrency} 
              valuve ={amountInSourceCurrency} 
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"  placeholder="Amount of Source currancy" required/>
              </div>

              </div>

              <button class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800" >Get the target currancy</button>
              
            </form>
          </section>
         </div>
    </div>
  )
}
