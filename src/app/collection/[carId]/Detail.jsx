"use client";
import { useQuery } from "@tanstack/react-query";
import { getCollectionById } from "@/services/collectionClient";


const Detail = ({ carId }) => {
  const {
    data: vehicle,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["car", carId],
    queryFn: async () => getCollectionById(carId),
    staleTime: 1000 * 60 * 5,
  });
  const handleStripe = async (vehicle) => {
    
      const response = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify({
          id: vehicle.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const session = await response.json();
      window.location.href = session.url; 
      console.log("Stripe session created:", session)
  };
  return (
    <section className="bg-[#0A0A0A] text-slate-800  min-h-screen pt-10">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {vehicle && (
        <div className="bg-[#0A0A0A] dark:bg-background-dark text-slate-800 dark:text-slate-200 min-h-screen pt-10">
          <div className="max-w-360 mx-auto px-6 lg:px-20 py-10 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/*Left Column: Gallery & Details*/}
              <div className="lg:col-span-8 space-y-12">
                {/*Main Gallery*/}
                <section className="space-y-4">
                  <div className="relative group aspect-video w-full rounded-xl overflow-hidden bg-panel-dark border border-border-dark">
                    <div
                      className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                      data-alt={vehicle.nombre_vehiculo}
                      style={{
                        backgroundImage: `url(${vehicle.url_img})`,
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-linear-to-t from-background-dark/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 flex gap-2">
                      <span className="bg-accent text-white border border-primary/30 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                        {vehicle.modelo}
                      </span>
                      <span className="bg-white/10 text-white border border-white/20 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                        {vehicle.motor}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
                    <div
                      className="min-w-45 aspect-video rounded-lg border-2 border-accent bg-center bg-cover cursor-pointer"
                      data-alt="Side profile of luxury silver sports car"
                      style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlq6N20lenBM7cPqpbLVKmN4ipCBpWGwRbf5nxX7Z0PxCxrLgnZqV00aylpHqEBkrmVPYepm8aoPV4wCwnEzAW3IKvbl_TJC2qDRzrxJDURZQJeEvFXMqspmcJPdlbjArGrCrIEp88mHZgD4fCoEIN-sEmwEiVOSFwOA-j97EE-vkD63rxX0LTk7e4QVpFYWn21BSGsWpGDLSsVBHKHGthLJDJOUBSuCc5aUJxKTn36w1UQAC5einB36VPmC7pCmqZ3hOe_Be7puc")`,
                      }}
                    ></div>
                    <div
                      className="min-w-45 aspect-video rounded-lg border border-border-dark opacity-60 hover:opacity-100 bg-center bg-cover cursor-pointer"
                      data-alt="Dashboard view of luxury sports car with carbon fiber"
                      style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC869_IBMVvvcCInI1St5kSZYiR9xA0V2IEpb5CYktau2Vr6Kn8APB-rPf7Nnf74KgM0JRG90BB112UD7FGklDHqqe7n7q5k2UvKFQqVQ8akUZjbcfSormQTQZutVmBQwN1dDeNAa_kp6jn3q3ajnMqwQPbiN_xdkjDuvdrVnhs9vrkxuN2f_V8zvBhMa436h4JnlFAquwf_4rxTWJLlbVfKOtOGX3WHGdHQOclrT6C9v6e_jP8JBT43wkWmgNsdPYrys3qdYifKvw")`,
                      }}
                    ></div>
                    <div
                      className="min-w-45 aspect-video rounded-lg border border-border-dark opacity-60 hover:opacity-100 bg-center bg-cover cursor-pointer"
                      data-alt="Close up of wheel and ceramic brakes"
                      style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuqvFf1F07kdHcLhD6ZHWuh2ykbxt6PxvKhh7j9J4Wbk1lfHOunEbx_33Jk0CbFVV9qYw55LVL1T4NkpvJziBGT2gyTPc668hzkCyjM_iNYD8vwZrcMLuvpCpiY5XPQXrCSASqRnMlDP_eNuZWMvcgEK_adetjfS7K_Tbewwl9p8B4uYmKyq4X_mQwha-qUUB2K2lw9xwpnwu_lj2hDhkQ6QYOq61XMKd06CnwigEmQYMGAsubRvX8nf0lIBeaPz6MQ8r5TsWQBYI")`,
                      }}
                    ></div>
                    <div
                      className="min-w-45 aspect-video rounded-lg border border-border-dark opacity-60 hover:opacity-100 bg-center bg-cover cursor-pointer"
                      data-alt="Rear view of car showing LED taillights"
                      style={{
                        backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnYkJ8OC6wzqkAcTSwXD8Uv5FdXhq8-NIBGlgEMiLRbv8ky9q1HECTUXS23LP_tA-Unzv5R0-d-oOljZhDbwTe1y953DC7K826ENj3AI1fvk0WUkAO6N_Jzcsfeu6W6b0lvB9zxdD-CG23iiil5Q3Y2tumtD93kTHgsYmCQpKtoqIOQM8hiMa9259CIItMM297N6ofevpRCBcKNM-8H-cz0NKu1L-86sfAMDy7vNyfq6yHsBso0NDQnhc1MiGf36GKUzBsIBQIUAA")`,
                      }}
                    ></div>
                  </div>
                </section>
                {/*Technical Specs Grid */}
                <section>
                  <h3 className="text-white text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      analytics
                    </span>
                    TECHNICAL SPECIFICATIONS
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                    <div className="bg-[#1C1F26] p-8 border border-[#1C1F26] group hover:border-primary/50 transition-colors">
                      <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
                        Engine
                      </p>
                      <p className="text-white text-2xl font-bold">
                        {vehicle.motor}
                      </p>
                    </div>
                    <div className="bg-[#1C1F26] p-8 border border-[#1C1F26] group hover:border-primary/50 transition-colors">
                      <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
                        Power
                      </p>
                      <p className="text-white text-2xl font-bold">
                        {vehicle.poder_hp} HP
                      </p>
                    </div>
                    <div className="bg-[#1C1F26] p-8 border border-[#1C1F26] group hover:border-primary/50 transition-colors">
                      <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
                        0-100 KM/H
                      </p>
                      <p className="text-white text-2xl font-bold">
                        {vehicle.aceleracion_0_100} SEC
                      </p>
                    </div>
                    <div className="bg-[#1C1F26] p-8 border border-[#1C1F26] group hover:border-primary/50 transition-colors">
                      <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
                        Top Speed
                      </p>
                      <p className="text-white text-2xl font-bold">
                        {vehicle.velocidad_maxima} KM/H
                      </p>
                    </div>
                    <div className="bg-[#1C1F26] p-8 border border-[#1C1F26] group hover:border-primary/50 transition-colors">
                      <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
                        Torque
                      </p>
                      <p className="text-white text-2xl font-bold">
                        {vehicle.torque_nm} NM
                      </p>
                    </div>
                    <div className="bg-[#1C1F26] p-8 border border-[#1C1F26] group hover:border-primary/50 transition-colors">
                      <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
                        Weight
                      </p>
                      <p className="text-white text-2xl font-bold">
                        {vehicle.peso_kg} KG
                      </p>
                    </div>
                  </div>
                </section>
                {/*Bento Style Features*/}
                <section className="space-y-8">
                  <h3 className="text-white text-2xl font-bold flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      architecture
                    </span>
                    ENGINEERING MARVELS
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 relative h-80 rounded-xl overflow-hidden border border-border-dark group">
                      <div
                        className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Detailed interior showing carbon fiber steering wheel"
                        style={{
                          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3lT89VIOB4cz3dZfTJO5eHvYbSRMjT1X78PkYT21c8poVMoNLjgBMhE-JGw33jpoHfbF6bQkVfPdo5cP0QwHh_d9AfYd2O19ikBK0yb-rM5efZoLX2hlJcxR5S3s5Og7UiKAaJbvQYJdaIJkhfZyHBW2gMAbhJu6SNjThGbD2WjXGx6FPni-_19lzLT95pbSyen642qniJA4q7iBHD3SsNqfhvvw24o8bcA0Fbn9Mj5Suo_-nt9z_LprJwi6Orp9E948c7oWBTXE")`,
                        }}
                      ></div>
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h4 className="text-white text-xl font-bold mb-2">
                          Precision Cockpit
                        </h4>
                        <p className="text-slate-300 text-sm max-w-md">
                          Every control is angled towards the driver, utilizing
                          forged carbon composites and Alcantara for maximum
                          tactile response.
                        </p>
                      </div>
                    </div>
                    <div className="relative h-80 rounded-xl overflow-hidden border border-border-dark group">
                      <div
                        className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                        data-alt="Close up of aerodynamic vents on car body"
                        style={{
                          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkfhCKGkhezhljKv3agYQWyliF0Vh7iX91nklP9-b-Ypf4ww8gpjhEftVMsWlWn5atHbMs5hF2NVc3Sj1UkjttpGT7pmYEpxTpRBB_lRlT2vtA9xraPtf5roVofjQDFcdBoQptIF3AzweGxnsNIzPzHqt0dFgsf7aycBjmBdg8FK8jNvJq8G9E6M3cIGXHbw9M7MkZnMkwnJzyq1qPiwxWqyHmBl0C3AdzMCvRd0Hjf8pDWKxv1m6UwCh2vH4qsZ3HeF3on7jmydw")`,
                        }}
                      ></div>
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h4 className="text-white text-lg font-bold mb-2">
                          Active Aero
                        </h4>
                        <p className="text-slate-300 text-sm">
                          Real-time wing adjustment for 40% more downforce.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              {/*Right Column: Fixed Info & CTA*/}
              <div className="lg:col-span-4">
                <div className="sticky-panel space-y-6">
                  {/*Pricing Card*/}
                  <div className="bg-panel-dark border border-border-dark rounded-xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <span className="material-symbols-outlined text-8xl">
                        speed
                      </span>
                    </div>
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-2">
                        <h1 className="text-white text-4xl font-black tracking-tighter uppercase leading-none">
                          {vehicle.nombre_vehiculo}
                        </h1>
                        <span className="bg-accent text-background-dark text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                          In Stock
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm mb-6 uppercase tracking-widest">
                        Model Year {vehicle.anio}
                      </p>
                      <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-white text-3xl font-bold">
                          ${vehicle.precio}
                        </span>
                      </div>
                      <div className="space-y-4 flex flex-col justify-center items-center">
                        {/* Stripe Checkout Button */}
                        <button
                          onClick={() => handleStripe(vehicle)}
                          className=" cursor-pointer w-full bg-accent hover:bg-primary text-background-dark h-14 rounded-lg font-bold text-base uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                        >
                          <span className="material-symbols-outlined">
                            shopping_cart
                          </span>
                          Buy Now
                        </button>
                        <button className=" cursor-pointer w-full border border-border-dark hover:bg-border-dark text-white h-14 rounded-lg font-bold text-base uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined">
                            mail
                          </span>
                          Request More Info
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*Financing Calculator Panel*/}

                  {/*Dealer Info*/}
                  <div className="p-6 border border-border-dark rounded-xl flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">
                        {vehicle.fabricas.nombre_planta}
                      </p>
                      <p className="text-slate-500 text-xs">
                        {vehicle.fabricas.ciudad}, {vehicle.fabricas.pais}
                      </p>
                    </div>
                    <button className="ml-auto text-accent hover:text-white transition-colors">
                      <span className="material-symbols-outlined">map</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Detail;
