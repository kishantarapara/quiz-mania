export function QuizRules({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-neutral-600/20 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm md:max-w-2xl p-8 relative max-h-10/12 overflow-y-scroll">
        <button
          onClick={() => onClose()}
          className="absolute right-4 top-4 text-neutral-400 hover:text-neutral-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <h2 className="text-3xl font-bold text-primary-dark mb-6">
          Quiz rules
        </h2>

        <div className="space-y-6">
          <div>
            <div className="bg-primary-foreground p-2 rounded-md mb-2">
              <h3 className="font-bold text-lg">10-Second Timer</h3>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>Each question comes with a 10-second timer.</li>
              <li>
                If you don't answer within the time limit, the app will
                automatically move to the next question.
              </li>
            </ul>
          </div>

          <div>
            <div className="bg-primary-foreground p-2 rounded-md mb-2">
              <h3 className="font-bold text-lg">Manual Navigation</h3>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You can navigate to the next question manually before the timer
                expires.
              </li>
              <li>
                Use the "Next" button to move ahead if you're ready before the
                timer runs out.
              </li>
            </ul>
          </div>

          <div>
            <div className="bg-primary-foreground p-2 rounded-md mb-2">
              <h3 className="font-bold text-lgk">
                Final Score and Performance Message
              </h3>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                After all questions are answered, your final score will be
                displayed.
              </li>
              <li>
                Based on your performance, you will receive a personalized
                message:
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    Great job!: If you score <strong>above 80%</strong>.
                  </li>
                  <li>
                    Well done!: If you score{" "}
                    <strong>between 60% and 80%</strong>.
                  </li>
                  <li>
                    Keep practicing!: If you score <strong>below 60%</strong>.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizRules;
