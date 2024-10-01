import React from 'react'
import Popup from 'reactjs-popup'

type PopupProps = {
    closeModal: () => void
    open: boolean
    text: string
    children: React.ReactNode
}

/**
 * A popup component that displays a modal with a close button and the given text and children.
 * @param {PopupProps} props The props for the PopUp component.
 * @param {boolean} props.open Whether or not the popup is open.
 * @param {() => void} props.closeModal The function to call when the close button is clicked.
 * @param {string} props.text The text to display in the popup.
 * @param {React.ReactNode} props.children The children to display in the popup.
 * @returns {React.ReactElement} The rendered popup.
 */
const PopUp = (props: PopupProps) => {
    return (
        <Popup open={props.open} closeOnDocumentClick onClose={props.closeModal}>
            <div className="modal w-fit mx-2 rounded-lg bg-neutral-50 px-8 lg:max-w-3xl">
                <div className='flex w-full justify-end'>
                    <a className="cursor-pointer close text-neutral-700 text-3xl py-2 " onClick={props.closeModal}>
                        &times;
                    </a>
                </div>
                <p className="text-justify text-base text-neutral-700">
                    {props.text}
                </p>
                {props.children}
            </div>
        </Popup>
    )
}

export default PopUp