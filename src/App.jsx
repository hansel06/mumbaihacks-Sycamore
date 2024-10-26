import { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import ChatFeed from "./components/ChatFeed"; // Import ChatFeed component
import axios from 'axios'; // Import axios for making HTTP requests

const App = () => {
  // Create refs for each section to scroll to
  const heroRef = useRef(null);
  const featureRef = useRef(null);
  const workflowRef = useRef(null);
  const pricingRef = useRef(null);
  const testimonialsRef = useRef(null);

  // State to store chatbot messages
  const [messages, setMessages] = useState([]);

  // Fetch messages from the Flask backend
  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get-messages');
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages(); // Fetch messages when the component mounts
  }, []);

  return (
    <Router>
      <Navbar
        refs={{
          hero: heroRef,
          features: featureRef,
          workflow: workflowRef,
          
        }}
      />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={
            <>
              <div ref={heroRef}>
                <HeroSection />
              </div>
              <div ref={featureRef}>
                <FeatureSection />
              </div>
              <div ref={workflowRef}>
                <Workflow />
              </div>
            </>
          } />
          <Route path="/chat" element={<ChatFeed messages={messages} />} /> {/* Updated route for ChatFeed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
