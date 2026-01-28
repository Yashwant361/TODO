import React, { useEffect, useState } from 'react'
import { Modal,Divider } from 'antd'
export default function Eg4() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(true)
    }, [])
    return (
        <>
            <div>
                <Modal
                    open={open}
                    title='Description'
                    onCancel={() => setOpen(false)}
                    onOk={() => setOpen(false)}
                    maskClosable={false}
                    width={720}
                    centered

                // onCancel={() => alert('Cancel Clicked')}
                // onOk={() => alert('Ok Clicked')}
                // footer={null}
                >
                <Divider/>
                    <p>Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only
                        five centuries.

                    </p>
                </Modal>
                <b>Eg4</b>
            </div>
        </>
    )
}
