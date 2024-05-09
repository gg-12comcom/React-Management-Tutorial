import React, { useState } from "react";


export const Main = () => {
    const [Number, setNumbr] = useState(0);

    return (
        <>
            <div>
                {Number}
                <div onClick={() => setNumbr((prev) => prev + 1)}>Button</div>
            </div>
        </>
    );
};
