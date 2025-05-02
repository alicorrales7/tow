import { createSignal } from "solid-js";
import { validateComplaintData } from "../../lib/document-generator";

type LanguageCode = "en" | "es" | "fr" | "pt";

interface PlaceholderTexts {
  name: string;
  company: string;
  location: string;
  date: string;
  amount: string;
  description: string;
}

interface HelpTexts {
  name: string;
  company: string;
  location: string;
  date: string;
  amount: string;
  description: string;
  evidence: string;
}

interface ErrorMessages {
  required: string;
  invalidDate: string;
  invalidAmount: string;
}

export default function AssistantPage() {
  const [nombre, setNombre] = createSignal("");
  const [direccion, setDireccion] = createSignal("");
  const [telefono, setTelefono] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [empresa, setEmpresa] = createSignal("");
  const [direccionEmpresa, setDireccionEmpresa] = createSignal("");
  const [anioVehiculo, setAnioVehiculo] = createSignal("");
  const [modeloVehiculo, setModeloVehiculo] = createSignal("");
  const [placa, setPlaca] = createSignal("");
  const [propietario, setPropietario] = createSignal("");
  const [fecha, setFecha] = createSignal("");
  const [descripcion, setDescripcion] = createSignal("");
  const [pagoGrua, setPagoGrua] = createSignal("");
  const [costoRemolque, setCostoRemolque] = createSignal("");
  const [costoReparacion, setCostoReparacion] = createSignal("");
  const [evidencias, setEvidencias] = createSignal<string[]>([]);
  const [resultado, setResultado] = createSignal("");
  const [selectedLanguage, setSelectedLanguage] =
    createSignal<LanguageCode>("en");
  const [currentStep, setCurrentStep] = createSignal(1);
  const [errors, setErrors] = createSignal<Record<string, string>>({});

  const languages = [
    { code: "en" as LanguageCode, name: "English" },
    { code: "es" as LanguageCode, name: "Español" },
    { code: "fr" as LanguageCode, name: "Français" },
    { code: "pt" as LanguageCode, name: "Português" },
  ];

  const placeholders: Record<LanguageCode, PlaceholderTexts> = {
    en: {
      name: "Your full name",
      company: "Towing company name",
      location: "Incident location",
      date: "Incident date",
      amount: "Claim amount ($)",
      description: "Description of what happened",
    },
    es: {
      name: "Tu nombre completo",
      company: "Nombre de la empresa de grúas",
      location: "Lugar del incidente",
      date: "Fecha del incidente",
      amount: "Monto reclamado ($)",
      description: "Descripción de lo ocurrido",
    },
    fr: {
      name: "Votre nom complet",
      company: "Nom de l'entreprise de remorquage",
      location: "Lieu de l'incident",
      date: "Date de l'incident",
      amount: "Montant réclamé ($)",
      description: "Description de ce qui s'est passé",
    },
    pt: {
      name: "Seu nome completo",
      company: "Nome da empresa de reboque",
      location: "Local do incidente",
      date: "Data do incidente",
      amount: "Valor reclamado ($)",
      description: "Descrição do ocorrido",
    },
  };

  const helpTexts: Record<LanguageCode, HelpTexts> = {
    en: {
      name: "Enter your full legal name as it should appear on the document",
      company: "Enter the complete name of the towing company",
      location: "Where did the incident occur? Include city and state",
      date: "When did the incident occur? (MM/DD/YYYY)",
      amount: "Enter the total amount you are claiming in USD",
      description:
        "Provide a detailed description of what happened. Include specific details about the incident, any interactions with the towing company, and why you believe the charges were unfair.",
      evidence: "Optional: List any evidence you have to support your claim",
    },
    es: {
      name: "Ingrese su nombre legal completo como debe aparecer en el documento",
      company: "Ingrese el nombre completo de la empresa de grúas",
      location: "¿Dónde ocurrió el incidente? Incluya ciudad y estado",
      date: "¿Cuándo ocurrió el incidente? (MM/DD/AAAA)",
      amount: "Ingrese el monto total que está reclamando en USD",
      description:
        "Proporcione una descripción detallada de lo sucedido. Incluya detalles específicos sobre el incidente, cualquier interacción con la empresa de grúas y por qué considera que los cargos fueron injustos.",
      evidence:
        "Opcional: Liste cualquier evidencia que tenga para respaldar su reclamo",
    },
    fr: {
      name: "Entrez votre nom légal complet tel qu'il doit apparaître sur le document",
      company: "Entrez le nom complet de l'entreprise de remorquage",
      location: "Où l'incident s'est-il produit? Incluez la ville et l'état",
      date: "Quand l'incident s'est-il produit? (MM/JJ/AAAA)",
      amount: "Entrez le montant total que vous réclamez en USD",
      description:
        "Fournissez une description détaillée de ce qui s'est passé. Incluez des détails spécifiques sur l'incident, toute interaction avec l'entreprise de remorquage et pourquoi vous pensez que les frais étaient injustes.",
      evidence:
        "Optionnel: Listez toute preuve que vous avez pour appuyer votre réclamation",
    },
    pt: {
      name: "Digite seu nome legal completo como deve aparecer no documento",
      company: "Digite o nome completo da empresa de reboque",
      location: "Onde o incidente ocorreu? Inclua cidade e estado",
      date: "Quando o incidente ocorreu? (MM/DD/AAAA)",
      amount: "Digite o valor total que você está reclamando em USD",
      description:
        "Forneça uma descrição detalhada do que aconteceu. Inclua detalhes específicos sobre o incidente, qualquer interação com a empresa de reboque e por que você acredita que os encargos foram injustos.",
      evidence:
        "Opcional: Liste qualquer evidência que você tenha para apoiar sua reclamação",
    },
  };

  const errorMessages: Record<LanguageCode, ErrorMessages> = {
    en: {
      required: "This field is required",
      invalidDate: "Please enter a valid date (MM/DD/YYYY)",
      invalidAmount: "Please enter a valid amount",
    },
    es: {
      required: "Este campo es obligatorio",
      invalidDate: "Por favor ingrese una fecha válida (MM/DD/AAAA)",
      invalidAmount: "Por favor ingrese un monto válido",
    },
    fr: {
      required: "Ce champ est obligatoire",
      invalidDate: "Veuillez entrer une date valide (MM/JJ/AAAA)",
      invalidAmount: "Veuillez entrer un montant valide",
    },
    pt: {
      required: "Este campo é obrigatório",
      invalidDate: "Por favor, insira uma data válida (MM/DD/AAAA)",
      invalidAmount: "Por favor, insira um valor válido",
    },
  };

  const generarTexto = async () => {
    try {
      const complaintData = {
        consumerName: nombre(),
        consumerAddress: direccion(),
        consumerPhone: telefono(),
        consumerEmail: email(),
        businessName: empresa(),
        businessAddress: direccionEmpresa(),
        vehicleYear: anioVehiculo(),
        vehicleMakeModel: modeloVehiculo(),
        licensePlate: placa(),
        registeredOwner: propietario(),
        incidentDate: fecha(),
        incidentDescription: descripcion(),
        driverPayment: Number(pagoGrua()),
        towingCost: Number(costoRemolque()),
        repairsCost: Number(costoReparacion()),
        evidenceList: evidencias(),
      };

      // Validar los datos antes de generar el documento
      const validationErrors = validateComplaintData(complaintData);
      if (validationErrors.length > 0) {
        const errorMessages = validationErrors
          .map((error) => error.message)
          .join("\n");
        setResultado(
          `Error: Please correct the following fields:\n${errorMessages}`
        );
        return;
      }

      // Mostrar el contenido del reclamo en inglés
      const totalAmount =
        Number(pagoGrua()) +
        Number(costoRemolque()) +
        Number(costoReparacion());

      setResultado(`Consumer Complaint Statement - Miami-Dade County

Consumer Information:
Name: ${nombre()}
Address: ${direccion()}
Phone: ${telefono()}
Email: ${email()}

Business Information:
Business Name: ${empresa()}
Address: ${direccionEmpresa()}

Vehicle Information:
Year, Make & Model: ${anioVehiculo()} ${modeloVehiculo()}
License Plate: ${placa()}
Registered Owner: ${propietario()}

Statement of Complaint:
${descripcion()}

Expenses:
- $${pagoGrua()} paid to the driver
- $${costoRemolque()} for the tow to the mechanic
- $${costoReparacion()} for mechanical repairs

Total Amount Claimed: $${totalAmount}

Supporting Evidence:
${evidencias()
  .map((evidence) => `- ${evidence}`)
  .join("\n")}

Resolution Requested:
I am requesting full reimbursement for all expenses related to this incident.`);
    } catch (error) {
      console.error("Error generating document:", error);
      setResultado(
        `Error: ${error instanceof Error ? error.message : "Error generating the document. Please try again."}`
      );
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    const lang = selectedLanguage();

    switch (step) {
      case 1:
        if (!nombre().trim()) {
          newErrors.nombre = errorMessages[lang].required;
        }
        if (!direccion().trim()) {
          newErrors.direccion = errorMessages[lang].required;
        }
        if (!telefono().trim()) {
          newErrors.telefono = errorMessages[lang].required;
        }
        if (!email().trim()) {
          newErrors.email = errorMessages[lang].required;
        }
        break;

      case 2:
        if (!empresa().trim()) {
          newErrors.empresa = errorMessages[lang].required;
        }
        if (!direccionEmpresa().trim()) {
          newErrors.direccionEmpresa = errorMessages[lang].required;
        }
        break;

      case 3:
        if (!anioVehiculo().trim()) {
          newErrors.anioVehiculo = errorMessages[lang].required;
        }
        if (!modeloVehiculo().trim()) {
          newErrors.modeloVehiculo = errorMessages[lang].required;
        }
        if (!placa().trim()) {
          newErrors.placa = errorMessages[lang].required;
        }
        if (!propietario().trim()) {
          newErrors.propietario = errorMessages[lang].required;
        }
        break;

      case 4:
        if (!fecha().trim()) {
          newErrors.fecha = errorMessages[lang].required;
        }
        if (!descripcion().trim()) {
          newErrors.descripcion = errorMessages[lang].required;
        }
        break;

      case 5:
        if (!pagoGrua().trim()) {
          newErrors.pagoGrua = errorMessages[lang].required;
        } else if (isNaN(Number(pagoGrua()))) {
          newErrors.pagoGrua = errorMessages[lang].invalidAmount;
        }
        if (!costoRemolque().trim()) {
          newErrors.costoRemolque = errorMessages[lang].required;
        } else if (isNaN(Number(costoRemolque()))) {
          newErrors.costoRemolque = errorMessages[lang].invalidAmount;
        }
        if (!costoReparacion().trim()) {
          newErrors.costoReparacion = errorMessages[lang].required;
        } else if (isNaN(Number(costoReparacion()))) {
          newErrors.costoReparacion = errorMessages[lang].invalidAmount;
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep())) {
      if (currentStep() < 5) {
        setCurrentStep(currentStep() + 1);
      } else {
        generarTexto();
      }
    }
  };

  const prevStep = () => {
    if (currentStep() > 1) {
      setCurrentStep(currentStep() - 1);
    }
  };

  return (
    <section class="flex justify-center px-6 py-12 bg-gray-100 min-h-screen">
      <div class="bg-white shadow-md rounded-2xl max-w-4xl w-full p-8 space-y-8 animate-fade-in">
        <div class="flex justify-between items-center border-b pb-6">
          <h1 class="text-3xl font-bold text-blue-700">
            Consumer Complaint Generator
          </h1>
          <select
            class="input w-40 bg-gray-50 border-gray-300 rounded-lg"
            value={selectedLanguage()}
            onChange={(e) =>
              setSelectedLanguage(e.currentTarget.value as LanguageCode)
            }
          >
            {languages.map((lang) => (
              <option value={lang.code}>{lang.name}</option>
            ))}
          </select>
        </div>

        <div class="flex justify-center mb-8">
          <div class="flex flex-wrap gap-4 justify-center">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                class={`flex items-center ${
                  currentStep() >= step ? "text-blue-600" : "text-gray-400"
                }`}
              >
                <div
                  class={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep() >= step
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {step}
                </div>
                <span class="ml-2 hidden sm:inline">
                  {step === 1 && "Consumer Info"}
                  {step === 2 && "Business Info"}
                  {step === 3 && "Vehicle Info"}
                  {step === 4 && "Incident Details"}
                  {step === 5 && "Expenses"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <form class="space-y-8">
          <div class="bg-gray-50 p-6 rounded-xl">
            {currentStep() === 1 && (
              <div class="space-y-6">
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">
                  Consumer Information
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-4">
                    <input
                      class={`input w-full h-12 text-lg px-4 py-2 rounded-lg transition-all duration-200 ${
                        errors().nombre
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-blue-400 focus:border-blue-500"
                      }`}
                      placeholder="Full Name"
                      value={nombre()}
                      onInput={(e) => {
                        setNombre(e.currentTarget.value);
                        if (errors().nombre) {
                          setErrors({ ...errors(), nombre: "" });
                        }
                      }}
                    />
                    {errors().nombre && (
                      <p class="text-sm text-red-500">{errors().nombre}</p>
                    )}
                    <p class="text-sm text-gray-600">
                      {helpTexts[selectedLanguage()].name}
                    </p>
                  </div>
                  <div class="space-y-4">
                    <input
                      class={`input w-full h-12 text-lg px-4 py-2 rounded-lg transition-all duration-200 ${
                        errors().direccion
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-blue-400 focus:border-blue-500"
                      }`}
                      placeholder="Address"
                      value={direccion()}
                      onInput={(e) => {
                        setDireccion(e.currentTarget.value);
                        if (errors().direccion) {
                          setErrors({ ...errors(), direccion: "" });
                        }
                      }}
                    />
                    {errors().direccion && (
                      <p class="text-sm text-red-500">{errors().direccion}</p>
                    )}
                    <p class="text-sm text-gray-600">
                      {helpTexts[selectedLanguage()].location}
                    </p>
                  </div>
                  <div class="space-y-4">
                    <input
                      class={`input w-full h-12 text-lg px-4 py-2 rounded-lg transition-all duration-200 ${
                        errors().telefono
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-blue-400 focus:border-blue-500"
                      }`}
                      placeholder="Phone Number"
                      value={telefono()}
                      onInput={(e) => {
                        setTelefono(e.currentTarget.value);
                        if (errors().telefono) {
                          setErrors({ ...errors(), telefono: "" });
                        }
                      }}
                    />
                    {errors().telefono && (
                      <p class="text-sm text-red-500">{errors().telefono}</p>
                    )}
                    <p class="text-sm text-gray-600">
                      Enter your contact phone number
                    </p>
                  </div>
                  <div class="space-y-4">
                    <input
                      class={`input w-full h-12 text-lg px-4 py-2 rounded-lg transition-all duration-200 ${
                        errors().email
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-blue-400 focus:border-blue-500"
                      }`}
                      placeholder="Email"
                      type="email"
                      value={email()}
                      onInput={(e) => {
                        setEmail(e.currentTarget.value);
                        if (errors().email) {
                          setErrors({ ...errors(), email: "" });
                        }
                      }}
                    />
                    {errors().email && (
                      <p class="text-sm text-red-500">{errors().email}</p>
                    )}
                    <p class="text-sm text-gray-600">
                      Enter your contact email for communication about the
                      complaint
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentStep() === 2 && (
              <div class="space-y-6">
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">
                  Business Information
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-4">
                    <input
                      class={`input w-full h-12 text-lg px-4 py-2 rounded-lg transition-all duration-200 ${
                        errors().empresa
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-blue-400 focus:border-blue-500"
                      }`}
                      placeholder="Business Name"
                      value={empresa()}
                      onInput={(e) => {
                        setEmpresa(e.currentTarget.value);
                        if (errors().empresa) {
                          setErrors({ ...errors(), empresa: "" });
                        }
                      }}
                    />
                    {errors().empresa && (
                      <p class="text-sm text-red-500">{errors().empresa}</p>
                    )}
                    <p class="text-sm text-gray-600">
                      {helpTexts[selectedLanguage()].company}
                    </p>
                  </div>
                  <div class="space-y-4">
                    <input
                      class={`input w-full h-12 text-lg px-4 py-2 rounded-lg transition-all duration-200 ${
                        errors().direccionEmpresa
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-blue-400 focus:border-blue-500"
                      }`}
                      placeholder="Business Address"
                      value={direccionEmpresa()}
                      onInput={(e) => {
                        setDireccionEmpresa(e.currentTarget.value);
                        if (errors().direccionEmpresa) {
                          setErrors({ ...errors(), direccionEmpresa: "" });
                        }
                      }}
                    />
                    {errors().direccionEmpresa && (
                      <p class="text-sm text-red-500">
                        {errors().direccionEmpresa}
                      </p>
                    )}
                    <p class="text-sm text-gray-600">
                      {helpTexts[selectedLanguage()].location}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentStep() === 3 && (
              <div class="space-y-6">
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">
                  Vehicle Information
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-4">
                    <input
                      class={`input w-full h-12 text-lg px-4 py-2 rounded-lg transition-all duration-200 ${
                        errors().anioVehiculo
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-blue-400 focus:border-blue-500"
                      }`}
                      placeholder="Vehicle Year"
                      value={anioVehiculo()}
                      onInput={(e) => {
                        setAnioVehiculo(e.currentTarget.value);
                        if (errors().anioVehiculo) {
                          setErrors({ ...errors(), anioVehiculo: "" });
                        }
                      }}
                    />
                    {errors().anioVehiculo && (
                      <p class="text-sm text-red-500">
                        {errors().anioVehiculo}
                      </p>
                    )}
                    <p class="text-sm text-gray-600">
                      Enter the year your vehicle was manufactured
                    </p>
                  </div>
                  <div class="space-y-4">
                    <input
                      class={`input w-full h-12 text-lg px-4 py-2 rounded-lg transition-all duration-200 ${
                        errors().modeloVehiculo
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-blue-400 focus:border-blue-500"
                      }`}
                      placeholder="Make & Model"
                      value={modeloVehiculo()}
                      onInput={(e) => {
                        setModeloVehiculo(e.currentTarget.value);
                        if (errors().modeloVehiculo) {
                          setErrors({ ...errors(), modeloVehiculo: "" });
                        }
                      }}
                    />
                    {errors().modeloVehiculo && (
                      <p class="text-sm text-red-500">
                        {errors().modeloVehiculo}
                      </p>
                    )}
                    <p class="text-sm text-gray-600">
                      Enter the make and model of your vehicle (e.g., Toyota
                      Camry)
                    </p>
                  </div>
                  <div class="space-y-4">
                    <input
                      class={`input w-full h-12 text-lg px-4 py-2 rounded-lg transition-all duration-200 ${
                        errors().placa
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-blue-400 focus:border-blue-500"
                      }`}
                      placeholder="License Plate"
                      value={placa()}
                      onInput={(e) => {
                        setPlaca(e.currentTarget.value);
                        if (errors().placa) {
                          setErrors({ ...errors(), placa: "" });
                        }
                      }}
                    />
                    {errors().placa && (
                      <p class="text-sm text-red-500">{errors().placa}</p>
                    )}
                    <p class="text-sm text-gray-600">
                      Enter your vehicle's license plate number
                    </p>
                  </div>
                  <div class="space-y-4">
                    <input
                      class={`input w-full h-12 text-lg px-4 py-2 rounded-lg transition-all duration-200 ${
                        errors().propietario
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-blue-400 focus:border-blue-500"
                      }`}
                      placeholder="Registered Owner"
                      value={propietario()}
                      onInput={(e) => {
                        setPropietario(e.currentTarget.value);
                        if (errors().propietario) {
                          setErrors({ ...errors(), propietario: "" });
                        }
                      }}
                    />
                    {errors().propietario && (
                      <p class="text-sm text-red-500">{errors().propietario}</p>
                    )}
                    <p class="text-sm text-gray-600">
                      Enter the name of the registered owner of the vehicle
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentStep() === 4 && (
              <div class="space-y-6">
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">
                  {selectedLanguage() === "es"
                    ? "Detalles del Incidente"
                    : selectedLanguage() === "fr"
                      ? "Détails de l'Incident"
                      : selectedLanguage() === "pt"
                        ? "Detalhes do Incidente"
                        : "Incident Details"}
                </h2>
                <div class="grid grid-cols-1 gap-6">
                  <div class="space-y-4">
                    <input
                      class={`input w-full h-12 text-lg px-4 py-2 rounded-lg transition-all duration-200 ${
                        errors().fecha
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-blue-400 focus:border-blue-500"
                      }`}
                      type="date"
                      value={fecha()}
                      onInput={(e) => {
                        setFecha(e.currentTarget.value);
                        if (errors().fecha) {
                          setErrors({ ...errors(), fecha: "" });
                        }
                      }}
                    />
                    {errors().fecha && (
                      <p class="text-sm text-red-500">{errors().fecha}</p>
                    )}
                    <p class="text-sm text-gray-600">
                      {helpTexts[selectedLanguage()].date}
                    </p>
                  </div>
                  <div class="space-y-4">
                    <textarea
                      class={`input w-full min-h-[400px] text-lg px-6 py-4 rounded-lg transition-all duration-200 ${
                        errors().descripcion
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-blue-400 focus:border-blue-500"
                      }`}
                      placeholder={
                        selectedLanguage() === "es"
                          ? "Describa detalladamente lo que sucedió, incluyendo el lugar, hora y cualquier interacción con la empresa de grúas..."
                          : selectedLanguage() === "fr"
                            ? "Décrivez en détail ce qui s'est passé, y compris le lieu, l'heure et toute interaction avec l'entreprise de remorquage..."
                            : selectedLanguage() === "pt"
                              ? "Descreva detalhadamente o que aconteceu, incluindo local, hora e qualquer interação com a empresa de guincho..."
                              : "Describe in detail what happened, including the location, time, and any interactions with the towing company..."
                      }
                      value={descripcion()}
                      onInput={(e) => {
                        setDescripcion(e.currentTarget.value);
                        if (errors().descripcion) {
                          setErrors({ ...errors(), descripcion: "" });
                        }
                      }}
                    />
                    {errors().descripcion && (
                      <p class="text-sm text-red-500">{errors().descripcion}</p>
                    )}
                    <p class="text-sm text-gray-600">
                      {helpTexts[selectedLanguage()].description}
                    </p>
                  </div>
                  <div class="space-y-4">
                    <textarea
                      class="input w-full h-32 text-lg px-6 py-4 rounded-lg transition-all duration-200 border-gray-300 hover:border-blue-400 focus:border-blue-500"
                      placeholder={
                        selectedLanguage() === "es"
                          ? "Liste cualquier evidencia que tenga (fotos, recibos, videos)..."
                          : selectedLanguage() === "fr"
                            ? "Listez toutes les preuves que vous avez (photos, reçus, vidéos)..."
                            : selectedLanguage() === "pt"
                              ? "Liste qualquer evidência que você tenha (fotos, recibos, vídeos)..."
                              : "List any evidence you have (photos, receipts, videos)..."
                      }
                      value={evidencias().join("\n")}
                      onInput={(e) => {
                        const lines = e.currentTarget.value
                          .split("\n")
                          .filter((line) => line.trim());
                        setEvidencias(lines);
                      }}
                    />
                    <p class="text-sm text-gray-600">
                      {helpTexts[selectedLanguage()].evidence}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentStep() === 5 && (
              <div class="space-y-6">
                <h2 class="text-2xl font-semibold text-gray-800 mb-6">
                  Expenses
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-4">
                    <input
                      class={`input w-full h-12 text-lg px-4 py-2 rounded-lg transition-all duration-200 ${
                        errors().pagoGrua
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-blue-400 focus:border-blue-500"
                      }`}
                      type="number"
                      placeholder="Amount paid to driver"
                      value={pagoGrua()}
                      onInput={(e) => {
                        setPagoGrua(e.currentTarget.value);
                        if (errors().pagoGrua) {
                          setErrors({ ...errors(), pagoGrua: "" });
                        }
                      }}
                    />
                    {errors().pagoGrua && (
                      <p class="text-sm text-red-500">{errors().pagoGrua}</p>
                    )}
                    <p class="text-sm text-gray-600">
                      {helpTexts[selectedLanguage()].amount}
                    </p>
                  </div>
                  <div class="space-y-4">
                    <input
                      class={`input w-full h-12 text-lg px-4 py-2 rounded-lg transition-all duration-200 ${
                        errors().costoRemolque
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-blue-400 focus:border-blue-500"
                      }`}
                      type="number"
                      placeholder="Towing cost"
                      value={costoRemolque()}
                      onInput={(e) => {
                        setCostoRemolque(e.currentTarget.value);
                        if (errors().costoRemolque) {
                          setErrors({ ...errors(), costoRemolque: "" });
                        }
                      }}
                    />
                    {errors().costoRemolque && (
                      <p class="text-sm text-red-500">
                        {errors().costoRemolque}
                      </p>
                    )}
                    <p class="text-sm text-gray-600">
                      Enter the total towing service cost
                    </p>
                  </div>
                  <div class="space-y-4">
                    <input
                      class={`input w-full h-12 text-lg px-4 py-2 rounded-lg transition-all duration-200 ${
                        errors().costoReparacion
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300 hover:border-blue-400 focus:border-blue-500"
                      }`}
                      type="number"
                      placeholder="Repair cost"
                      value={costoReparacion()}
                      onInput={(e) => {
                        setCostoReparacion(e.currentTarget.value);
                        if (errors().costoReparacion) {
                          setErrors({ ...errors(), costoReparacion: "" });
                        }
                      }}
                    />
                    {errors().costoReparacion && (
                      <p class="text-sm text-red-500">
                        {errors().costoReparacion}
                      </p>
                    )}
                    <p class="text-sm text-gray-600">
                      Enter any repair costs related to the incident
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div class="flex justify-between pt-6">
            <button
              type="button"
              class={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                currentStep() === 1
                  ? "invisible"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
              onClick={prevStep}
              aria-label="Previous step"
            >
              Back
            </button>
            <button
              type="button"
              class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200"
              onClick={currentStep() === 5 ? generarTexto : nextStep}
              aria-label={
                currentStep() === 5 ? "Generate document" : "Next step"
              }
            >
              {currentStep() === 5 ? "Generate Document" : "Next"}
            </button>
          </div>
        </form>

        {resultado() && (
          <div class="mt-8 bg-gray-50 p-6 rounded-xl shadow-inner whitespace-pre-wrap text-sm text-gray-800 border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">
              Generated Document Preview
            </h3>
            {resultado()}
          </div>
        )}
      </div>
    </section>
  );
}
