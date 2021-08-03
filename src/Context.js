import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {


  const [counter, setCounter] = useState(1);
  const [input, setInput] = useState({name: '', url: ''});
  const [links, setLinks] = useState([]);
  const [menu, setMenu] = useState(false);
  const [update, setUpdate] = useState(false);
  const [linkIndex, setLinkIndex] = useState(0);
  const [shit, setShit] = useState(0);
  const [alert, setAlert] = useState({bool: false, color: '', text: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.name === '' || input.url === '') {
      showAlert(true, '#fcd4da', 'Please enter some date');
      return false;
    } else {
      // to add a new link
      if(!update) {
        links.push(input);
        localStorage.setItem('links', JSON.stringify(links));
        setCounter(counter + 1);
        showAlert(true, '#14ff5d85', 'New link was added');

        // to edit an existing link
      } else {
        // use input values to change a single index in links array
        links[linkIndex] = input;
        localStorage.setItem('links', JSON.stringify(links));
        setCounter(counter + 1);
        setUpdate(false);
        setMenu(false);
        showAlert(true, '#14ff5d85', 'Link updated');
      } 

    }
  }

  const showAlert = (bool = false, color= '', text='') => {
    setAlert({bool, color, text});

    setTimeout(() => {
      setAlert(false, '', '');
    }, 2000);
  }
  // function to handle menu click
  const handleMenu = (index) => {
    setShit(index);
    setMenu(!menu);
  }

  // function to remove a single link
  const removeLink = (link) => {
    links.splice(link, 1);
    setLinks(links);
    localStorage.setItem('links', JSON.stringify(links));
    setCounter(counter + 1);
    setMenu(false);
    showAlert(true, '#fcd4da', 'One link was removed');
  }

  // function for the update btn
  const openUpdate = (link) => {
    setUpdate(true);
    setLinkIndex(link);

    const name = links[link].name;
    const url = links[link].url;
    setInput({name, url});
  }

  useEffect(() => {
    const savedLinks = localStorage.getItem('links');
    setLinks(JSON.parse(savedLinks));

    setInput({
      name: '',
      url: ''
    });

  }, [counter])

  return(
    <AppContext.Provider value={{
      handleSubmit,
      input,
      setInput,
      links,
      setMenu,
      menu,
      handleMenu,
      removeLink,
      openUpdate,
      setUpdate,
      update,
      shit,
      ...alert
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }