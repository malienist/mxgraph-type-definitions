declare class mxDictionary<T=any> {
  constructor();

  /**
   * Function: map
   *
   * Stores the (key, value) pairs in this dictionary.
   */
  map: { [key: string]: T };

  /**
   * Function: clear
   *
   * Clears the dictionary.
   */
  clear(): void;

  /**
   * Function: get
   *
   * Returns the value for the given key.
   */
  get(key: any): T;

  /**
   * Function: put
   *
   * Stores the value under the given key and returns the previous
   * value for that key.
   */
  put(key: any, value: T): T;

  /**
   * Function: remove
   *
   * Removes the value for the given key and returns the value that
   * has been removed.
   */
  remove(key: string): T;

  /**
   * Function: getKeys
   *
   * Returns all keys as an array.
   */
  getKeys(): string[];

  /**
   * Function: getValues
   *
   * Returns all values as an array.
   */
  getValues(): T[];

  /**
   * Function: visit
   *
   * Visits all entries in the dictionary using the given function with the
   * following signature: function(key, value) where key is a string and
   * value is an object.
   *
   * Parameters:
   *
   * visitor - A function that takes the key and value as arguments.
   */
  visit(visitor: (key: string, value: T) => void): void;

}
