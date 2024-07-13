import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/images/logo.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    navigate("/admin");
    setErrorMessage("");

    const soapEnvelope = `
     <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://services.webservicesoap.sn.esp/">
   <soapenv:Header/>
   <soapenv:Body>
      <ser:login>
         <!--Optional:-->
         <username>${username}</username>
         <!--Optional:-->
         <password>${password}</password>
      </ser:login>
   </soapenv:Body>
</soapenv:Envelope>
    `;

    try {
      const response = await axios.post(
        "http://localhost:8181/ws/user",
        soapEnvelope,
        {
          headers: {
            "Content-Type": "text/xml",
            SOAPAction: "",
          },
        }
      );

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(response.data, "text/xml");
      console.log(xmlDoc);
      const success =
        xmlDoc.getElementsByTagName("success")[0].childNodes[0].nodeValue;

      if (success === "true") {
        // Suppose the response contains user data if the login is successful
      } else {
        throw new Error("username ou mot de passe incorrect");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="bg-[url('/Users/moussadiallo/Documents/frontendMaster/uml_test/my-project/src/images/logo/host.jpg')] no-repeat bg-cover flex h-screen min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="rounded-[50%] mx-auto h-10 w-auto"
          src={logo}
          alt={"logo UCAD"}
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-600">
          Bienvenue / Dalal Diam
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-3" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Adresse username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mot de Passe
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Mot de passe oublié
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {errorMessage && (
            <div className="text-center text-red-500">{errorMessage}</div>
          )}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Connexion
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Pas encore membre?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            S'inscrire
          </a>
        </p>
      </div>
    </div>
  );
}
