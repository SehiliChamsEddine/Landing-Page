const { useRef } = React;
const Form = () => {
  const firstName = useRef("Not defined");
  const lastName = useRef("Not defined");
  const phoneNumber = useRef("Not defined");
  const state = useRef("Not defined");
  const subState = useRef("Not defined");
  return (
    <form>
      <div className="form-discription">
        <h1>املأ معلوماتك الشخصية واطلب المنتج</h1>

      </div>
   
    
        
          <input type="text" ref={firstName} placeholder="الاسم" />
 
       
          <input type="text" ref={lastName} placeholder="اللقب" />



  
        <input type="text" ref={phoneNumber} placeholder="رقم الهاتف" />

  
  
   
          <input type="text" ref={state} placeholder="الولاية" />
  
        
      
          <input type="text" ref={subState} placeholder="البلدية" />

      <button>
        أطلب الان <i className="fa-solid fa-cart-shopping"></i>
      </button>
    
    </form>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Form />);
