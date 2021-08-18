import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper, useToast, Modal, Input, AsyncButton } from "uxp/components";
import './styles.scss';

interface IWidgetProps {
    uxpContext?: IContextProvider
}


export const RequestWidget: React.FunctionComponent<IWidgetProps> = (props) => {
    let model = 'SimpleRequest';
    let action = 'RegisterRequest';
    let [showingModal,setShowingModeal] = React.useState(false);
    let [description,setDescription] = React.useState('');
    let [subject,setSubject] = React.useState('');
    let toast = useToast();
    async function submit() {
        try {
            if (!subject) throw 'Please specify a subject';
            if (!description) throw 'Please specify a description';
            let r = await props.uxpContext.executeAction(model,action,{subject,description},{json:true});
            setShowingModeal(false);
            setSubject('');
            setDescription('');
            toast.success('Submitted');
        } catch(e) {
            toast.error(e);
        }
    }
    function renderModal() {
        return <Modal
        className='simple-request'
        title={'Register Request'}
        show={showingModal}
        onClose={()=>setShowingModeal(false)}

        >
            <div style={{width:'600px',marginLeft:'auto',marginRight:'auto',flex:1,flexDirection:'column',justifyContent:'flex-start',padding:'20px',alignItems:'space-between',display:'flex'}}>
                <div style={{padding:'10px'}}>

                <Input   value={subject} onChange={(txt)=>setSubject(txt)} placeholder={'Give us a summary'} />
                </div>
                <div  style={{padding:'10px'}}>
                    <textarea rows={5} className='sr' value={description} onChange={(e)=>setDescription(e.target.value)} placeholder={'Tell us about your problem in depth'} />
                </div>
                <AsyncButton  title={'Submit'} onClick={async () => await submit()}  />
            </div>
        </Modal>
    }
    return (
        <WidgetWrapper className='simple-request-button'>
            
            <div style={{cursor:'pointer','flex':1,display:'flex',justifyContent:'center',alignItems:'center'}} onClick={()=>setShowingModeal(true)}>
                <div className='icon' />
            </div>
            {
                showingModal && renderModal()
            }
        </WidgetWrapper>
    )
};

/**
 * Register as a Widget
 */
registerWidget({
    id: "simple-request",
    name: "Simple Request",
    widget: RequestWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "simple_request",
    label: "Simple_request",
    // click: () => alert("Hello"),
    component: Simple_requestWidget
});
*/

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"simple_request",
    component: Simple_requestWidget
});
*/