
// import React, { useState } from "react";
// import styles from "./dashboard.module.css" ;
// // import "./PitchCrafter.css";

// export default function Dashboard() {
//   const [idea, setIdea] = useState("");
//   const [output, setOutput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleGenerate = async () => {
//     if (!idea.trim()) return;
//     setLoading(true);
//     setOutput("");

//     try {
//       const res = await fetch("/api/generate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ idea }),
//       });

//       const data = await res.json();
//       setOutput(data.text || "No response received.");
//     } catch (err) {
//       console.error(err);
//       setOutput("Something went wrong while generating your pitch.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={styles.pitchContainer}>
//       <h1>Pitch Crafter</h1>
//       <p>
//         Enter your startup idea below to generate a title, tags, pitch, and landing page.
//       </p>

//       <textarea
//         className={styles.pitchInput}
//         placeholder="Describe your startup idea..."
//         value={idea}
//         onChange={(e) => setIdea(e.target.value)}
//         rows="4"
//       />

//       <button
//         className={styles.pitchButton}
//         onClick={handleGenerate}
//         disabled={loading}
//       >
//         {loading ? "Generating..." : "Generate Pitch"}
//       </button>

//       {output && (
//         <div className={styles.pitchOutput}>
//           {output}
//         </div>
//       )}
//     </div>
//   );
// }










import React, { useState } from "react";
import styles from "./dashboard.module.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function Dashboard() {
  const [idea, setIdea] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);


  // Initialize Gemini API client using your .env key
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  const handleGenerate = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    setOutput("");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `
      You are a startup idea generator.
      Based on the following idea, generate the following details clearly:

      1. **Unique Startup Name**
      2. **Relevant Tags**
      3. **Startup Pitch (2-3 sentences)**
      4. **Target Audience**

      Idea: "${idea}"
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setOutput(text);
    } catch (error) {
      console.error("Error generating pitch:", error);
      setOutput("Something went wrong while generating your pitch.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.pitchContainer}>
      <h1>Pitch Crafter</h1>
      <p>
        Enter your startup idea below to generate a unique name, tags, pitch, and audience.
      </p>

      <textarea
        className={styles.pitchInput}
        placeholder="Describe your startup idea..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        rows="4"
      />

      <button
        className={styles.pitchButton}
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Pitch"}
      </button>

      {output && (
        <div className={styles.pitchOutput}>
          {output}
        </div>
      )}
    </div>
  );
}
