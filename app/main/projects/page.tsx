"use client";
import {useState, useEffect} from 'react';


interface Question {
  id: number;
  questionText: string;
  options: string[];
  correctAnswers: string[];
  type: 'MCQ' | 'MAQ';
}


export default function ProjectsPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showCorrect, setShowCorrect] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });

  // Parse your .txt file content into Question array
  useEffect(() => {
    // Replace this with actual text file parsing logic
    const mockQuestions: Question[] = [
      {
        id: 1,
        questionText: "Which service minimizes operational overhead for credential management?",
        options: ["Secrets Manager", "Parameter Store", "KMS", "CloudHSM"],
        correctAnswers: ["Secrets Manager"],
        type: 'MCQ'
      },
      // Add more questions following the same structure
    ];
    setQuestions(mockQuestions);
  }, []);

  const handleAnswerSelect = (option: string) => {
    if (questions[currentQuestionIndex].type === 'MCQ') {
      setSelectedAnswers([option]);
    } else {
      setSelectedAnswers(prev => 
        prev.includes(option) 
          ? prev.filter(a => a !== option) 
          : [...prev, option]
      );
    }
  };

  const checkAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = 
      selectedAnswers.length === currentQuestion.correctAnswers.length &&
      selectedAnswers.every(answer => currentQuestion.correctAnswers.includes(answer));

    setScore(prev => ({
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      incorrect: isCorrect ? prev.incorrect : prev.incorrect + 1
    }));
    setShowCorrect(true);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(prev => Math.min(prev + 1, questions.length - 1));
    setSelectedAnswers([]);
    setShowCorrect(false);
  };

  const prevQuestion = () => {
    setCurrentQuestionIndex(prev => Math.max(prev - 1, 0));
    setSelectedAnswers([]);
    setShowCorrect(false);
  };

  if (!questions.length) return <div className="p-4 text-center">Loading questions...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Score Display */}
      <div className="mb-6 p-4 bg-gray-100 rounded-lg flex justify-between">
        <span className="text-green-600">Correct: {score.correct}</span>
        <span className="text-red-600">Incorrect: {score.incorrect}</span>
      </div>

      {/* Question Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Question {currentQuestionIndex + 1}/{questions.length}
        </h2>
        <p className="mb-6 text-black">{questions[currentQuestionIndex].questionText}</p>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className={`p-3 rounded-lg border-2 ${
                selectedAnswers.includes(option)
                  ? 'border-blue-500 bg-blue-50 text-black'
                  : 'border-gray-200 hover:border-blue-300 text-black'
              } ${
                showCorrect && questions[currentQuestionIndex].correctAnswers.includes(option)
                  ? 'border-green-500 bg-green-50'
                  : ''
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Control Buttons */}
        <div className="flex justify-between gap-4">
          <button
            onClick={prevQuestion}
            disabled={currentQuestionIndex === 0}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          
          {!showCorrect ? (
            <button
              onClick={checkAnswer}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Check Answer
            </button>
          ) : (
            <div className="text-center">
              {score.correct + score.incorrect === currentQuestionIndex + 1 && (
                <span className={`
                  ${selectedAnswers.every(a => 
                    questions[currentQuestionIndex].correctAnswers.includes(a)) 
                    ? 'text-green-600' 
                    : 'text-red-600'}
                  font-semibold
                `}>
                  {selectedAnswers.every(a => 
                    questions[currentQuestionIndex].correctAnswers.includes(a)) 
                    ? 'Correct!' 
                    : 'Incorrect!'}
                </span>
              )}
            </div>
          )}
          
          <button
            onClick={nextQuestion}
            disabled={currentQuestionIndex === questions.length - 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
  }
