# Utilizzare il componente Button

### 1.  Importalo nel componente che vuoi utilizzarlo.
### 2.  passali come props _buttonStyle_ e _buttonSize_.
###     - _buttonStyle_ è lo stile del bottone e può ricevere 3 argomenti:
```
"btn--primary"       => Stile di Default sfondo bianco testo nero
"btn--outline-black" => Sfondo Trasparente, bordo e testo nero
"btn--outline-white" => Sfondo Trasparente, bordo e testo bianco
```
### _buttonSize_ è la grandezza del bottone e può ricevere 2 argomenti:
```
"btn--medium"        => Per per Desktop e Tablet
"btn--large"         => Per per Smartphone
```
         
# Esempio d'utilizzo

```
import { Button } from "./utils/Button";

//btn--primary
<Button buttonStyle="btn--primary" buttonSize="btn--medium">
    Scopri di più
</Button>

//btn--outline-black
<Button buttonStyle="btn--outline-black" buttonSize="btn--medium"> 
    Scopri di più 
</Button>

//btn--outline-white
<Button buttonStyle="btn--outline-white" buttonSize="btn--medium">
    Scopri di più
</Button>
```
![alt text](https://media.discordapp.net/attachments/1016286419980922902/1019942252891623454/unknown.png?width=811&height=93)
