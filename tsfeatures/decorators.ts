class Boat {
  color: string = 'red';

  @logError('Piloting errored')
  pilot(): void {
    throw new Error('Some error');
    console.log('pilot');
  }
}

function logError(msg: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    console.log('target: ', target);
    console.log('key: ', key);
    
    const method = desc.value;
    try {
      method();
    } catch (error) {
      console.log(msg);
    }
  }
}