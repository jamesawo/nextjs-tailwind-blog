import {ChangeEvent, FormEvent, FormEventHandler, useEffect, useRef, useState} from "react";

import {IForm, IFormInput} from "../../lib/types/data.interface";
import ActionButton from "./button";
import {InputTypeEnum} from "../../lib/types/data.enum";

const INPUT_STYLE = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
const LABEL_STYLE = "block mb-2 text-sm font-medium text-gray-900 dark:text-white";


type Props = {
    fields: IForm;
    onSubmit: (data: any) => Promise<boolean>;
    loading: boolean;
}

const Form = ({fields, onSubmit, loading}: Props) => {
    const [values, setValues] = useState({});
    const formRef = useRef<HTMLFormElement>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e:  FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(values).then(res => {
            if (res){
                formRef?.current?.reset();
            }
        });
    }

    return (
        <>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="flex flex-col gap-10">
                    <>
                        {
                            fields.inputs.map((inputItem, index) => (
                                <div key={index}>
                                    <label htmlFor={inputItem.name} className={LABEL_STYLE}>{inputItem.label}</label>
                                    {InputTypeEnum.toInputElement(inputItem, handleInputChange, INPUT_STYLE)}
                                </div>
                            ))
                        }
                        <div>
                            <ActionButton title="Submit" type="submit" isLoading={loading} />
                        </div>
                    </>
                </div>
            </form>
        </>
    );
}

export default Form;
