import {IFormInput} from "./data.interface";

export enum LayoutEnum {
    EDITOR,
    FRONT
}

export enum AlertEnum {
    DANGER = "DANGER",
    SUCCESS = "SUCCESS",
    INFO = "INFO",
    LOADING = "LOADING",
}

export enum InputTypeEnum {
    TEXT = "TEXT",
    TEXT_AREA = "TEXT_AREA",
    DATE = "DATE",
    NUMBER = "NUMBER",
    PASSWORD = "PASSWORD",
    CHECK_BOX = "CHECK_BOX",
}

export namespace InputTypeEnum {
    export function toInputElement(inputItem: IFormInput, handleInputChange: any, inputStyle: string): any {
        switch (inputItem.type) {
            case InputTypeEnum.TEXT:
                return (
                    <input type="text"
                           id={inputItem.name}
                           name={inputItem.name}
                           placeholder={inputItem.placeholder}
                           required={inputItem.required}
                           onChange={e => handleInputChange(e)}
                           className={inputStyle}
                           defaultValue={inputItem.defaultValue}
                    />
                );
            case InputTypeEnum.TEXT_AREA:
                return (
                    <textarea
                        id={inputItem.name}
                        name={inputItem.name}
                        rows={4}
                        placeholder={inputItem.placeholder}
                        required={inputItem.required}
                        onChange={e => handleInputChange(e)}
                        className={inputStyle}
                        defaultValue={inputItem.defaultValue}
                    />
                );

            case InputTypeEnum.DATE:
                return (
                    <input type="date"
                           id={inputItem.name}
                           name={inputItem.name}
                           onChange={e => handleInputChange(e)}
                           required={inputItem.required}
                           className={inputStyle}
                           defaultValue={inputItem.defaultValue}
                    />
                );
            default:
                return (<></>);
        }
    }
}
