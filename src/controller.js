const controller = async () => {
    try{
        const response = await fetch('./src/stockLibros.json');
        const data = await response.json();

        return data;
    }
    catch(error){
        console.log('hay un error',error)
    }
};

export{ controller };