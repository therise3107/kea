// logic
import Scene from './scene'

export { createCombinedSaga } from './saga'
export { getRoutes, combineScenesAndRoutes } from './routes'
export { NEW_SCENE, createRootSaga, createKeaStore } from './store'

export function createScene (args) {
  return new Scene(args)
}
