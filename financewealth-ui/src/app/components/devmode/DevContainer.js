import '../../styles/defaults.scss';

const DevContainer = () => {
    const devContainers = [
        {
          path: '/pages/login',
          name: 'Página de login'
        },
        {
          path: '/pages/register',
          name: 'Página de registro'
        },
        {
          path: '/pages/renda',
          name: 'Pág. simulação de renda'
        }
      ];  

    return(
        <div className="debugContainer">
                <ul>
                    {devContainers.map((object) => {return (
                        <li>
                        <a href={object.path}>{object.name}</a>
                        <span>{object.path}</span>
                        </li>)})
                    }
                </ul>
        </div>
    );
};

export default DevContainer;