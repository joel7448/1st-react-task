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
      status :["fa-li","fa-li","fa-li","fa-li","text-muted","text-muted","text-muted","text-muted"],
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
      status :["fa-li","fa-li","fa-li","fa-li","fa-li","fa-li","fa-li","text-muted"],
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
    status :["fa-li","fa-li","fa-li","fa-li","fa-li","fa-li","fa-li","fa-li"],
  },
  ];
  return (
    <section className="pricing py-5">
    <div className="container">
      <div className="row">
  
      {a.map((a) => {
        return (
          <Bootstrap
          yes1={a.status[0]}
          yes2={a.status[1]}
          yes3={a.status[2]}
          yes4={a.status[3]}
          yes5={a.status[4]}
          yes6={a.status[5]}
          yes7={a.status[6]}
          yes8={a.status[7]}
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
