import React from 'react'
import {render,fireEvent, getByText} from '@testing-library/react'
import '@testing-library/jest-dom';
import Button from './Button.js'

test('Render the button with label',()=>{
    const {getByText}=render(
    <Button label="Click Me"/>
    )
    const buttonElement =getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
})
test('ClassName btn present',()=>{
    const {container}=render(
        <Button label="ClickMe"/>

    )
    const buttonElement=container.querySelector('button');
    expect(buttonElement).toHaveClass('btn');
})
// const mockFun =jest.fn();
//  test('fun',()=>{
//     mockFun()
//     mockFun()
//     expect(mockFun).toHaveBeenCalledTimes(2);
//  })

test('Button is Clicked',()=>{
    const onClickMock=jest.fn();
    const button=render(<Button label="Click Me" onClick={onClickMock}/>)
    const buttonElement=button.getByText('Click Me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
})