import {coursesArray} from "../../data/data.ts";
import {SecondaryInfoComponent} from "../secondary-info-component/SecondaryInfoComponent.tsx";

export const GeneralInfoComponent = () => {
    return (
        <div className="min-h-screen bg-[#121212] p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                coursesArray.map((value, index) => <SecondaryInfoComponent key={index} item={value}/>)
            }
        </div>
    );
};