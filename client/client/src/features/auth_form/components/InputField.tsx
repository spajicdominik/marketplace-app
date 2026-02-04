export default function InputField({ typeOfInput }: { typeOfInput: string }) {
    return (
        <p className="flex justify-between p-3">
            <label htmlFor={`${typeOfInput}`} >{typeOfInput}</label>
            <input id={`${typeOfInput}`} type={`${typeOfInput}`} name={`${typeOfInput}`} required className="bg-gray-200" />
        </p>
    )
}