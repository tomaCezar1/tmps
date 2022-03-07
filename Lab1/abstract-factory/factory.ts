import { Factory } from './factory-class.js';

const logger = Factory.getLogger();

logger.info('Info text');
logger.debug('Debug text');
logger.warn('Warn text');
logger.error('Error text');
