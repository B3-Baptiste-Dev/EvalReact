# DS

### QUESTIONS DE COURS
1. Quel composant vu en cours permet la gestion des routes avec React ?
```text
react-router-dom
```
2. Quel hook permet de récupérer un paramètre passé dans l’url ?
```text
useParams
```
3. Qu’est-ce qu’un fragment ?
```text
Un fragment permet de regrouper une liste d'éléments enfants sans ajouter d'élément supplémentaire au DOM.
```
4. Quel hook permet de déclencher une action à un moment précis du cycle de vie du composant 
```text
useEffect
```
5. React manipule-t-il directement le DOM de l’application ? expliquez…
```text
React manipule le DOM de l'application via le virtual DOM. Le virtual DOM est une copie du DOM qui est mise à jour à chaque changement d'état. Lorsqu'un changement est détecté, React compare le virtual DOM avec le DOM réel et met à jour uniquement les éléments qui ont changé. Cela permet d'optimiser les performances de l'application.
```
### QUESTIONS PRATIQUES

1. Vous mettez en place un routeur sur votre projet react, écrivez la route qui permet de lancer le composant Post en
   lui transmettant le slug du post à afficher en paramètre
```jsx
<Route path="/post/:slug" component={Post} />
```

2. Vous utilisez useReducer dans votre projet. Dans le code JSX, quel code permet d’afficher un bouton qui, lorsque
   l’on clique dessus, lance l’action « SET_ITEM »
```jsx
<button onClick={() => dispatch({ type: 'SET_ITEM' })}>Set Item</button>
```

3. Votre composant nécessite un state isAdmin. Ecrivez la ligne qui permet de le créer et de lui affecter la valeur
   « false » par dafaut.
```jsx
const [isAdmin, setIsAdmin] = useState(false);
```

4. En JSX, une div affiche le texte du state « message », elle possède du style inline déterminant sa couleur de police à
   rouge.
```jsx
<div style={{ color: 'red' }}>{message}</div>
```

5. En JSX, créez un input qui est rattaché au state « ville » et qui stockera ce que saisit l’utilisateur dans le state.
```jsx
<input type="text" value={ville} onChange={(e) => setVille(e.target.value)} />
```
