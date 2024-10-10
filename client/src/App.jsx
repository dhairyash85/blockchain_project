import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { abi, address } from "./Constants";
function App() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    name: "",
    sex: "Male",
    age: 0,
    addr: "",
    wallet: "",
  });

  const Table = () => {
    console.log(user[1][3].toString());
    return user.map((user) => (
      <tr class="flex w-full mb-4 bg-white">
        <tr class="flex w-full mb-4">
          <td class="p-4 w-1/4">{user.name}</td>
          <td class="p-4 w-1/4">{user[3].toString()}</td>
          <td class="p-4 w-1/4">{user[4]}</td>
        </tr>
      </tr>
    ));
  };
  const [addr, setAddress] = useState();
  const addPatient = async (e) => {
    e.preventDefault();
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const wallet = await signer.getAddress();
    console.log(addr);
    const hospital = new ethers.Contract(address, abi, signer);
    const sex = form.sex == "Male" ? 0 : 1;
    const patient = await hospital.addPatient(
      form.name,
      form.wallet,
      sex,
      form.age,
      form.addr
    );
    console.log(patient);
  };
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const wallet = await signer.getAddress();
        setAddress(signer);
        console.log(wallet);
        const hospital = new ethers.Contract(address, abi, signer);
        const patient = await hospital.returnAllPatients();
        patient.map((patient) => console.log(patient));
        setUser(patient);
        return console.log("register");
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };
  return (
    <div>
      {!addr ? (
        <div>
          <button onClick={() => connectWallet()} className="text-5xl">
            Connect
          </button>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-900 flex flex-col justify-center ">
          <div className="relative flex items-top justify-center min-h-screen dark:bg-gray-900 sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
              <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                    <h1 className="text-4xl sm:text-5xl text-white dark:text-white font-extrabold tracking-tight">
                      Manage your patients
                    </h1>
                    <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                      Track everyone who needs help
                    </p>

                    <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div className="ml-4 text-md tracking-wide font-semibold w-40">
                        Everywhere and nowhere
                      </div>
                    </div>

                    <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div className="ml-4 text-md tracking-wide font-semibold w-40">
                        +69 6969696969
                      </div>
                    </div>

                    <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div className="ml-4 text-md tracking-wide font-semibold w-40">
                        contactUsForWeed@money.com
                      </div>
                    </div>
                  </div>

                  <form className="p-6 flex flex-col justify-center">
                    <div className="flex flex-col">
                      <label for="name" className="hidden">
                        Full Name
                      </label>
                      <input
                        onChange={(e) =>
                          setForm((form) => {
                            return { ...form, name: e.target.value };
                          })
                        }
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label for="name" className="hidden">
                        Full Name
                      </label>
                      <input
                        onChange={(e) =>
                          setForm((form) => {
                            return { ...form, wallet: e.target.value };
                          })
                        }
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Wallet Address"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col mt-2">
                      <label for="email" className="hidden">
                        Sex
                      </label>
                      <select
                        onChange={(e) =>
                          setForm((form) => {
                            console.log(form);
                            return { ...form, sex: e.target.value };
                          })
                        }
                        value={form.sex}
                        placeholder="Sex"
                        className="w-100 mt-2 text-white   py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"
                      >
                        <option classNameName="text-white" value={"Male"}>
                          Male
                        </option>
                        <option classNameName="text-white" value={"Female"}>
                          Female
                        </option>
                      </select>
                    </div>

                    <div className="flex flex-col mt-2">
                      <label for="tel" className="hidden">
                        Address
                      </label>
                      <input
                        onChange={(e) =>
                          setForm((form) => {
                            return { ...form, addr: e.target.value };
                          })
                        }
                        type="text"
                        name="tel"
                        id="tel"
                        placeholder="Address"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col mt-2">
                      <label for="tel" className="hidden">
                        Age
                      </label>
                      <input
                        onChange={(e) =>
                          setForm((form) => {
                            return { ...form, age: e.target.value };
                          })
                        }
                        type="number"
                        name="tel"
                        id="tel"
                        placeholder="Age"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={addPatient}
                      className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
                    >
                      Add Patient
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <br></br>
          </div>
          <div class=" flex justify-center min-w-max mx-auto mb-24  ">
            <table class="text-left w-full min-w-[600px]">
              <thead class="bg-black flex text-white w-full">
                <th class="p-4 w-1/4">Name</th>
                <th class="p-4 w-1/4">Age</th>
                <th class="p-4 w-1/4">Address</th>
              </thead>
              <tbody
                class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full"
                // style="height: 50vh;"
              >
                {user && <Table />}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
