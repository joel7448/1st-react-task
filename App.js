import logo from "./logo.svg";
import "./App.css";
import Bootstrap from "./bootstrap";

function App() {
  let a = [
    {
      top: "Free",
      price: "$ 0",
      content: [
        "Single User",
        "5GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports",
      ],
    },
    {
      top: "PLUS",
      price: "$ 9",
      content: [
        "5 Users",
        "50GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports",
      ],
    },
    {
    top: "PRO",
    price: "$ 49",
    content: [
      "Unlimited Users",
      "150GB Storage",
      "Unlimited Public Projects",
      "Community Access",
      "Unlimited Private Projects",
      "Dedicated Phone Support",
      "Unlimited Free Subdomains",
      "Monthly Status Reports",
    ],
  },
  ];
  return (
    <section className="pricing py-5">
    <div className="container">
      <div className="row">
  
      {a.map((a) => {
        return (
          <Bootstrap
            tag={a.top}
            price={a.price}
            cont1={a.content[0]}
            cont2={a.content[1]}
            cont3={a.content[2]}
            cont4={a.content[3]}
            cont5={a.content[4]}
            cont6={a.content[5]}
            cont7={a.content[6]}
            cont8={a.content[7]}
          ></Bootstrap>
        );
      })}
    
    </div>
    </div>
  </section>
  );
}

export default App;
