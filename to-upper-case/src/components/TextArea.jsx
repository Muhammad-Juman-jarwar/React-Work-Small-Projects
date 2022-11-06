const TextArea = (props) => {

    return (
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
            </label>
            <textarea
            onChange={props.onChange}
            value={props.value}
            className={props.className}
            id="exampleFormControlTextarea1"
            rows="3"
            ></textarea>
        </div>
    );
};
export default TextArea;
