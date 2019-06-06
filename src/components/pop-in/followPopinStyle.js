export function getStyles(){
    return {
        openPopin: {
            display: 'inline-block',
            textAlign: 'center',
            color: '#ffffff',
            textDecoration: 'none',
            backgroundColor: 'crimson',
            padding: '0.5em 1.5em',
            borderRadius: '20px',
            marginBottom: '0.8em'
        },
        popin:{
            position: 'fixed',
            left: '0', 
            right: '0',
            top: '0', 
            bottom: '0',
            overflow: 'auto',
            opacity: '0',
            visibility: 'hidden',          
            backgroundColor: 'rgba(0,0,0,0.5)',
            transition: 'all 0.4s ease',
            ':target': {
                opacity: '1',
                visibility: 'visible'
            }
        },
        popinContent:{
            position: 'relative', 
            zIndex: '1', 
            width: 'auto', 
            minWidth: '300px',  
            margin: '0 auto',            
            backgroundColor: '#ffffff',
            padding: '2em',
            boxShadow: '0 3px 5px 1px rgba(0,0,0,0.25)',
            width: '66.66%',
            
        }
    }
    
}