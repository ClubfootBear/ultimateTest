import React, {useState} from "react"
import "./RadioGroup.css"
import { Radio, Input } from 'antd';

const RadioGroup = (props) => {
    const [value, setValue]  = useState(1)

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
        alignItems: 'center',
        marginBottom: '2px',
    };

    const RadioWrapper = {
        marginTop: '10px',
    };

    const Array = [...props.Array]

    const Group = Array.map((p, index)=> <Radio style={radioStyle} value={index + 1}>
        {p}
    </Radio>)

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue( e.target.value )
    }

    return (
            <Radio.Group onChange={onChange} value={value} style={RadioWrapper}>
                <div>
                    {Group}
                </div>
            </Radio.Group>
    )
}

export default RadioGroup;