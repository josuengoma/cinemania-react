import './Button.css'

const Button = ({ title, typeBtn }) => {
    return (
        <div className="box">
            <button class="btn" type={typeBtn}>{title}</button>
        </div>
    );
};

export default Button;