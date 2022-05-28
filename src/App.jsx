import { motion } from 'framer-motion';
import './App.css';
import Board from './components/Board';
import CardItem from './components/CardItem';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div>
      <div className="board-tasks">
        <Grid container spacing={2}>
          <Grid item>
            <Board></Board>
          </Grid>
          <Grid item>
            <Board></Board>
          </Grid>
          <Grid item>
            <Board></Board>
          </Grid>
        </Grid>
      </div>

      <motion.div
        drag
        whileDrag={{ scale: 1.2 }}
        className="App">
        <CardItem taskName="Clean kitchen"></CardItem>
      </motion.div>


      <motion.div
        drag
        whileDrag={{ scale: 1.2 }}
        className="App">
        <CardItem taskName="Clean kitchen"></CardItem>
      </motion.div>


      <motion.div
        drag
        whileDrag={{ scale: 1.2 }}
        className="App">
        <CardItem taskName="Cook cookies"></CardItem>
      </motion.div>

      
    </div>
  );
}

export default App;
