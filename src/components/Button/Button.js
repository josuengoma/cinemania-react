import './Button.css'

const Button = ({ contentBtn, typeBtn, nameBtn, onClick }) => {
    return (
        <div >
            <button class="btn" type={typeBtn} name={nameBtn} onClick={onClick}>{contentBtn}</button>
        </div>
    );
};

export default Button;