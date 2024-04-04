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
          name: 'Pág. de simulação de investimentos'
        }
      ];

    return(
        <div className="debugContainer">
            {devContainers.map((object) => {return(
                <div className="debugBox">
                    <a href={object.path}>{object.name}</a>
                    <span>{object.path}</span>
                </div>
            )})}
        </div>
    );
};

export default DevContainer;