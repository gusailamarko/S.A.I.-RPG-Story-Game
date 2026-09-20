import { createContext, useContext, useState, type ReactNode } from "react";
import Feedback from "../components/Feedback";

interface FeedbackContextType {
    showFeedback: (type: "success" | "error", msg: string, duration?: number) => void;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
    const [feedbackType, setFeedbackType] = useState<"success" | "error">("error");
    const [feedbackMsg, setFeedbackMsg] = useState("");
    const [usePopUp, setUsePopUp] = useState(false);

    const showFeedback = (type: "success" | "error", msg: string, duration = 3000) => {
        setFeedbackType(type);
        setFeedbackMsg(msg);
        setUsePopUp(true);
        setTimeout(() => setUsePopUp(false), duration);
    };

    return (
        <FeedbackContext.Provider value={{ showFeedback }}>
            {children}
            {usePopUp && <Feedback type={feedbackType} msg={feedbackMsg} />}
        </FeedbackContext.Provider>
    );
};

export const useFeedback = () => {
    const context = useContext(FeedbackContext);
    if (context === undefined) {
        throw new Error("useFeedback must be used within a FeedbackProvider");
    }
    return context;
};