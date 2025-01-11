const OurVision = () => {
const visionData = [
        {
          title: "Empowerment through Education and Skill Development",
          subPoints: [
            "Provide comprehensive education and skill development programs to enhance the capabilities and employability of laborers.",
            "Promote lifelong learning opportunities to ensure continuous personal and professional growth."
          ]
        },
        {
          title: "Economic Stability and Financial Inclusion",
          subPoints: [
            "Facilitate access to fair employment opportunities and ensure fair wages for all laborers.",
            "Promote financial inclusion by providing financial literacy programs, savings schemes, and access to credit facilities."
          ]
        },
        {
          title: "Advocacy for Labor Rights",
          subPoints: [
            "Advocate for the rights and benefits of laborers, ensuring they receive the protections and entitlements they deserve under the law.",
            "Work towards improving labor laws and policies to create a more just and equitable working environment."
          ]
        },
        {
          title: "Health and Well-being",
          subPoints: [
            "Ensure laborers have access to adequate healthcare services and promote initiatives that enhance their physical and mental well-being.",
            "Implement programs focused on occupational health and safety to reduce workplace hazards and improve working conditions."
          ]
        },
        {
          title: "Community and Cooperative Development",
          subPoints: [
            "Foster a sense of community among laborers, encouraging mutual support and cooperation.",
            "Promote the cooperative model as a means to achieve collective growth and development."
          ]
        },
        {
          title: "Sustainable and Inclusive Development",
          subPoints: [
            "Advocate for sustainable practices that protect the environment and ensure the well-being of future generations.",
            "Promote inclusive development that benefits all sections of society, with a focus on marginalized and vulnerable labor communities."
          ]
        }
      ];
    return (
      <div className="relative min-h-fit bg-neutral-200   backdrop-blur-sm w-full rounded-md flex items-center">
        <div className="w-full rounded-md mx-auto px-4 py-8 space-y-8">
          <div className="max-w-6xl  px-0 md:px-8 rounded-lg">
            <h2 className="text-5xl font-bold mb-4 text-neutral-900">Our Vision</h2>
            <p className=" text-sm md:text-base text-neutral-700 mb-6">
            The vision of the Indian Labour Cooperative Society Ltd. (ILCS) is to empower and uplift the labor community across India through sustainable and equitable development. Our aim is to foster a cooperative environment where laborers can achieve their full potential, secure their rights, and improve their socio-economic status. We envision a society where every laborer is valued, their contributions are recognized, and they have access to opportunities that enable them to lead dignified and prosperous lives. </p>
          </div>
          <div className=" px-0 md:px-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-neutral-900">Key Elements of Our Vision:</h2>
            <ol className="space-y-2">
        {visionData.map((vision, index) => (
          <li key={index} className="bg-white p-4 rounded-lg">
            <h3 className=" font-semibold mb-2 text-sm md:text-base">{index + 1}. {vision.title}</h3>
            <ul className="list-disc pl-6 space-y-1">
              {vision.subPoints.map((point, pointIndex) => (
                <li key={pointIndex} className="text-neutral-700 text-xs md:text-sm">
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
            </div>
        </div>
      </div>
    )
  }
  
  export default OurVision