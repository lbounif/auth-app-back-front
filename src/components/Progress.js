
const Progress = () => {

    return (
        <div className="steps">
            {/* Step 1 */}
            {/* className is step or step active */}
            <div className="step-active">
                <div className="number">1</div>
                <div className="step-number">Step 1</div>
            </div>
            {/* Step 2 */}
            <div className="step">
                <div className="number">2</div>
                <div className="step-number">Step 2</div>
            </div>
            {/* Step 3 */}
            <div className="step">
                <div className="number">3</div>
                <div className="step-number">Step 3</div>
            </div>
        </div>
    )
}

export default Progress