import { Action, createReducer, on } from "@ngrx/store";
import * as ScoreboardPageActions from './scorebord-page.actions';

export interface State {
    home: number;
    away: number;
}

export const initialState: State = {
    home: 0,
    away: 0
}

const scoreboardReducer = createReducer(
    initialState,
    on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
    on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.home + 1 })),
    on(ScoreboardPageActions.resetScore, () => ({ away: 0, home: 0 })),
    on(ScoreboardPageActions.setScores, (state, {game}) => ({ home: game.home, away: game.away })),
)

export function reducer(state: State | undefined, action: Action) {
    return scoreboardReducer(state, action);
}