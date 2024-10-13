import React, { useState } from "react";
import axios from "axios";

const Translator = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("es"); // Default to Spanish (es)

  const translateText = async () => {
    const apiKey = "YOUR_GOOGLE_API_KEY"; // Replace with your API key
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    try {
      const response = await axios.post(url, {
        q: text,
        target: targetLanguage,
      });

      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error("Error with translation:", error);
    }
  };

  return (
    <div>
      <h2>Translator App</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <br />
      <label>
        Target Language:
        <select
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
        >
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          {/* Add more language options here */}
        </select>
      </label>
      <br />
      <button onClick={translateText}>Translate</button>
      <h3>Translated Text:</h3>
      <p>{translatedText}</p>
    </div>
  );
};

export default Translator;
