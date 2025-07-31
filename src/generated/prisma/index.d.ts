
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model TradingAccount
 * 
 */
export type TradingAccount = $Result.DefaultSelection<Prisma.$TradingAccountPayload>
/**
 * Model Trade
 * 
 */
export type Trade = $Result.DefaultSelection<Prisma.$TradePayload>
/**
 * Model TradeNote
 * 
 */
export type TradeNote = $Result.DefaultSelection<Prisma.$TradeNotePayload>
/**
 * Model AccountSummary
 * 
 */
export type AccountSummary = $Result.DefaultSelection<Prisma.$AccountSummaryPayload>
/**
 * Model SystemSettings
 * 
 */
export type SystemSettings = $Result.DefaultSelection<Prisma.$SystemSettingsPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  SUSPENDED: 'SUSPENDED',
  INACTIVE: 'INACTIVE'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const TradeType: {
  buy: 'buy',
  sell: 'sell'
};

export type TradeType = (typeof TradeType)[keyof typeof TradeType]


export const TradeEntry: {
  in: 'in',
  out: 'out'
};

export type TradeEntry = (typeof TradeEntry)[keyof typeof TradeEntry]


export const SettingType: {
  STRING: 'STRING',
  NUMBER: 'NUMBER',
  BOOLEAN: 'BOOLEAN',
  JSON: 'JSON'
};

export type SettingType = (typeof SettingType)[keyof typeof SettingType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type TradeType = $Enums.TradeType

export const TradeType: typeof $Enums.TradeType

export type TradeEntry = $Enums.TradeEntry

export const TradeEntry: typeof $Enums.TradeEntry

export type SettingType = $Enums.SettingType

export const SettingType: typeof $Enums.SettingType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tradingAccount`: Exposes CRUD operations for the **TradingAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TradingAccounts
    * const tradingAccounts = await prisma.tradingAccount.findMany()
    * ```
    */
  get tradingAccount(): Prisma.TradingAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trade`: Exposes CRUD operations for the **Trade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trades
    * const trades = await prisma.trade.findMany()
    * ```
    */
  get trade(): Prisma.TradeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tradeNote`: Exposes CRUD operations for the **TradeNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TradeNotes
    * const tradeNotes = await prisma.tradeNote.findMany()
    * ```
    */
  get tradeNote(): Prisma.TradeNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accountSummary`: Exposes CRUD operations for the **AccountSummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountSummaries
    * const accountSummaries = await prisma.accountSummary.findMany()
    * ```
    */
  get accountSummary(): Prisma.AccountSummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemSettings`: Exposes CRUD operations for the **SystemSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemSettings
    * const systemSettings = await prisma.systemSettings.findMany()
    * ```
    */
  get systemSettings(): Prisma.SystemSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    TradingAccount: 'TradingAccount',
    Trade: 'Trade',
    TradeNote: 'TradeNote',
    AccountSummary: 'AccountSummary',
    SystemSettings: 'SystemSettings',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "tradingAccount" | "trade" | "tradeNote" | "accountSummary" | "systemSettings" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      TradingAccount: {
        payload: Prisma.$TradingAccountPayload<ExtArgs>
        fields: Prisma.TradingAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradingAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradingAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingAccountPayload>
          }
          findFirst: {
            args: Prisma.TradingAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradingAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingAccountPayload>
          }
          findMany: {
            args: Prisma.TradingAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingAccountPayload>[]
          }
          create: {
            args: Prisma.TradingAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingAccountPayload>
          }
          createMany: {
            args: Prisma.TradingAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TradingAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingAccountPayload>[]
          }
          delete: {
            args: Prisma.TradingAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingAccountPayload>
          }
          update: {
            args: Prisma.TradingAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingAccountPayload>
          }
          deleteMany: {
            args: Prisma.TradingAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradingAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TradingAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingAccountPayload>[]
          }
          upsert: {
            args: Prisma.TradingAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingAccountPayload>
          }
          aggregate: {
            args: Prisma.TradingAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTradingAccount>
          }
          groupBy: {
            args: Prisma.TradingAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradingAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradingAccountCountArgs<ExtArgs>
            result: $Utils.Optional<TradingAccountCountAggregateOutputType> | number
          }
        }
      }
      Trade: {
        payload: Prisma.$TradePayload<ExtArgs>
        fields: Prisma.TradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findFirst: {
            args: Prisma.TradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findMany: {
            args: Prisma.TradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          create: {
            args: Prisma.TradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          createMany: {
            args: Prisma.TradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          delete: {
            args: Prisma.TradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          update: {
            args: Prisma.TradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          deleteMany: {
            args: Prisma.TradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          upsert: {
            args: Prisma.TradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          aggregate: {
            args: Prisma.TradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrade>
          }
          groupBy: {
            args: Prisma.TradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradeCountArgs<ExtArgs>
            result: $Utils.Optional<TradeCountAggregateOutputType> | number
          }
        }
      }
      TradeNote: {
        payload: Prisma.$TradeNotePayload<ExtArgs>
        fields: Prisma.TradeNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradeNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradeNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeNotePayload>
          }
          findFirst: {
            args: Prisma.TradeNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradeNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeNotePayload>
          }
          findMany: {
            args: Prisma.TradeNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeNotePayload>[]
          }
          create: {
            args: Prisma.TradeNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeNotePayload>
          }
          createMany: {
            args: Prisma.TradeNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TradeNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeNotePayload>[]
          }
          delete: {
            args: Prisma.TradeNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeNotePayload>
          }
          update: {
            args: Prisma.TradeNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeNotePayload>
          }
          deleteMany: {
            args: Prisma.TradeNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradeNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TradeNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeNotePayload>[]
          }
          upsert: {
            args: Prisma.TradeNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradeNotePayload>
          }
          aggregate: {
            args: Prisma.TradeNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTradeNote>
          }
          groupBy: {
            args: Prisma.TradeNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradeNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradeNoteCountArgs<ExtArgs>
            result: $Utils.Optional<TradeNoteCountAggregateOutputType> | number
          }
        }
      }
      AccountSummary: {
        payload: Prisma.$AccountSummaryPayload<ExtArgs>
        fields: Prisma.AccountSummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountSummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountSummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSummaryPayload>
          }
          findFirst: {
            args: Prisma.AccountSummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountSummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSummaryPayload>
          }
          findMany: {
            args: Prisma.AccountSummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSummaryPayload>[]
          }
          create: {
            args: Prisma.AccountSummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSummaryPayload>
          }
          createMany: {
            args: Prisma.AccountSummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountSummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSummaryPayload>[]
          }
          delete: {
            args: Prisma.AccountSummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSummaryPayload>
          }
          update: {
            args: Prisma.AccountSummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSummaryPayload>
          }
          deleteMany: {
            args: Prisma.AccountSummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountSummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountSummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSummaryPayload>[]
          }
          upsert: {
            args: Prisma.AccountSummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountSummaryPayload>
          }
          aggregate: {
            args: Prisma.AccountSummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountSummary>
          }
          groupBy: {
            args: Prisma.AccountSummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountSummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountSummaryCountArgs<ExtArgs>
            result: $Utils.Optional<AccountSummaryCountAggregateOutputType> | number
          }
        }
      }
      SystemSettings: {
        payload: Prisma.$SystemSettingsPayload<ExtArgs>
        fields: Prisma.SystemSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          findFirst: {
            args: Prisma.SystemSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          findMany: {
            args: Prisma.SystemSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          create: {
            args: Prisma.SystemSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          createMany: {
            args: Prisma.SystemSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          delete: {
            args: Prisma.SystemSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          update: {
            args: Prisma.SystemSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          deleteMany: {
            args: Prisma.SystemSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>[]
          }
          upsert: {
            args: Prisma.SystemSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemSettingsPayload>
          }
          aggregate: {
            args: Prisma.SystemSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemSettings>
          }
          groupBy: {
            args: Prisma.SystemSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SystemSettingsCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    tradingAccount?: TradingAccountOmit
    trade?: TradeOmit
    tradeNote?: TradeNoteOmit
    accountSummary?: AccountSummaryOmit
    systemSettings?: SystemSettingsOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    tradingAccounts: number
    tradeNotes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    tradingAccounts?: boolean | UserCountOutputTypeCountTradingAccountsArgs
    tradeNotes?: boolean | UserCountOutputTypeCountTradeNotesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTradingAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradingAccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTradeNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeNoteWhereInput
  }


  /**
   * Count Type TradingAccountCountOutputType
   */

  export type TradingAccountCountOutputType = {
    trades: number
    accountSummaries: number
  }

  export type TradingAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trades?: boolean | TradingAccountCountOutputTypeCountTradesArgs
    accountSummaries?: boolean | TradingAccountCountOutputTypeCountAccountSummariesArgs
  }

  // Custom InputTypes
  /**
   * TradingAccountCountOutputType without action
   */
  export type TradingAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingAccountCountOutputType
     */
    select?: TradingAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TradingAccountCountOutputType without action
   */
  export type TradingAccountCountOutputTypeCountTradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
  }

  /**
   * TradingAccountCountOutputType without action
   */
  export type TradingAccountCountOutputTypeCountAccountSummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountSummaryWhereInput
  }


  /**
   * Count Type TradeCountOutputType
   */

  export type TradeCountOutputType = {
    tradeNotes: number
  }

  export type TradeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tradeNotes?: boolean | TradeCountOutputTypeCountTradeNotesArgs
  }

  // Custom InputTypes
  /**
   * TradeCountOutputType without action
   */
  export type TradeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeCountOutputType
     */
    select?: TradeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TradeCountOutputType without action
   */
  export type TradeCountOutputTypeCountTradeNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeNoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    emailVerified: Date | null
    image: string | null
    registeredAt: Date | null
    approvedAt: Date | null
    approvedBy: string | null
    rejectedAt: Date | null
    rejectionReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    emailVerified: Date | null
    image: string | null
    registeredAt: Date | null
    approvedAt: Date | null
    approvedBy: string | null
    rejectedAt: Date | null
    rejectionReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    status: number
    emailVerified: number
    image: number
    registeredAt: number
    approvedAt: number
    approvedBy: number
    rejectedAt: number
    rejectionReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    status?: true
    emailVerified?: true
    image?: true
    registeredAt?: true
    approvedAt?: true
    approvedBy?: true
    rejectedAt?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    status?: true
    emailVerified?: true
    image?: true
    registeredAt?: true
    approvedAt?: true
    approvedBy?: true
    rejectedAt?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    status?: true
    emailVerified?: true
    image?: true
    registeredAt?: true
    approvedAt?: true
    approvedBy?: true
    rejectedAt?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string
    role: $Enums.UserRole
    status: $Enums.UserStatus
    emailVerified: Date | null
    image: string | null
    registeredAt: Date
    approvedAt: Date | null
    approvedBy: string | null
    rejectedAt: Date | null
    rejectionReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    emailVerified?: boolean
    image?: boolean
    registeredAt?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    rejectedAt?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    tradingAccounts?: boolean | User$tradingAccountsArgs<ExtArgs>
    tradeNotes?: boolean | User$tradeNotesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    emailVerified?: boolean
    image?: boolean
    registeredAt?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    rejectedAt?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    emailVerified?: boolean
    image?: boolean
    registeredAt?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    rejectedAt?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    emailVerified?: boolean
    image?: boolean
    registeredAt?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    rejectedAt?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "status" | "emailVerified" | "image" | "registeredAt" | "approvedAt" | "approvedBy" | "rejectedAt" | "rejectionReason" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    tradingAccounts?: boolean | User$tradingAccountsArgs<ExtArgs>
    tradeNotes?: boolean | User$tradeNotesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      tradingAccounts: Prisma.$TradingAccountPayload<ExtArgs>[]
      tradeNotes: Prisma.$TradeNotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string
      role: $Enums.UserRole
      status: $Enums.UserStatus
      emailVerified: Date | null
      image: string | null
      registeredAt: Date
      approvedAt: Date | null
      approvedBy: string | null
      rejectedAt: Date | null
      rejectionReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tradingAccounts<T extends User$tradingAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$tradingAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradingAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tradeNotes<T extends User$tradeNotesArgs<ExtArgs> = {}>(args?: Subset<T, User$tradeNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradeNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly registeredAt: FieldRef<"User", 'DateTime'>
    readonly approvedAt: FieldRef<"User", 'DateTime'>
    readonly approvedBy: FieldRef<"User", 'String'>
    readonly rejectedAt: FieldRef<"User", 'DateTime'>
    readonly rejectionReason: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.tradingAccounts
   */
  export type User$tradingAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingAccount
     */
    select?: TradingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingAccount
     */
    omit?: TradingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingAccountInclude<ExtArgs> | null
    where?: TradingAccountWhereInput
    orderBy?: TradingAccountOrderByWithRelationInput | TradingAccountOrderByWithRelationInput[]
    cursor?: TradingAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradingAccountScalarFieldEnum | TradingAccountScalarFieldEnum[]
  }

  /**
   * User.tradeNotes
   */
  export type User$tradeNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeNote
     */
    select?: TradeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeNote
     */
    omit?: TradeNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeNoteInclude<ExtArgs> | null
    where?: TradeNoteWhereInput
    orderBy?: TradeNoteOrderByWithRelationInput | TradeNoteOrderByWithRelationInput[]
    cursor?: TradeNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeNoteScalarFieldEnum | TradeNoteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model TradingAccount
   */

  export type AggregateTradingAccount = {
    _count: TradingAccountCountAggregateOutputType | null
    _min: TradingAccountMinAggregateOutputType | null
    _max: TradingAccountMaxAggregateOutputType | null
  }

  export type TradingAccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    accountNumber: string | null
    brokerName: string | null
    currency: string | null
    isActive: boolean | null
    isDefault: boolean | null
    color: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TradingAccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    accountNumber: string | null
    brokerName: string | null
    currency: string | null
    isActive: boolean | null
    isDefault: boolean | null
    color: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TradingAccountCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    accountNumber: number
    brokerName: number
    currency: number
    isActive: number
    isDefault: number
    color: number
    icon: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TradingAccountMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    accountNumber?: true
    brokerName?: true
    currency?: true
    isActive?: true
    isDefault?: true
    color?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TradingAccountMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    accountNumber?: true
    brokerName?: true
    currency?: true
    isActive?: true
    isDefault?: true
    color?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TradingAccountCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    accountNumber?: true
    brokerName?: true
    currency?: true
    isActive?: true
    isDefault?: true
    color?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TradingAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TradingAccount to aggregate.
     */
    where?: TradingAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradingAccounts to fetch.
     */
    orderBy?: TradingAccountOrderByWithRelationInput | TradingAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradingAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradingAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradingAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TradingAccounts
    **/
    _count?: true | TradingAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradingAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradingAccountMaxAggregateInputType
  }

  export type GetTradingAccountAggregateType<T extends TradingAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateTradingAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTradingAccount[P]>
      : GetScalarType<T[P], AggregateTradingAccount[P]>
  }




  export type TradingAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradingAccountWhereInput
    orderBy?: TradingAccountOrderByWithAggregationInput | TradingAccountOrderByWithAggregationInput[]
    by: TradingAccountScalarFieldEnum[] | TradingAccountScalarFieldEnum
    having?: TradingAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradingAccountCountAggregateInputType | true
    _min?: TradingAccountMinAggregateInputType
    _max?: TradingAccountMaxAggregateInputType
  }

  export type TradingAccountGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string | null
    accountNumber: string
    brokerName: string | null
    currency: string
    isActive: boolean
    isDefault: boolean
    color: string | null
    icon: string | null
    createdAt: Date
    updatedAt: Date
    _count: TradingAccountCountAggregateOutputType | null
    _min: TradingAccountMinAggregateOutputType | null
    _max: TradingAccountMaxAggregateOutputType | null
  }

  type GetTradingAccountGroupByPayload<T extends TradingAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradingAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradingAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradingAccountGroupByOutputType[P]>
            : GetScalarType<T[P], TradingAccountGroupByOutputType[P]>
        }
      >
    >


  export type TradingAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    accountNumber?: boolean
    brokerName?: boolean
    currency?: boolean
    isActive?: boolean
    isDefault?: boolean
    color?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    trades?: boolean | TradingAccount$tradesArgs<ExtArgs>
    accountSummaries?: boolean | TradingAccount$accountSummariesArgs<ExtArgs>
    _count?: boolean | TradingAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradingAccount"]>

  export type TradingAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    accountNumber?: boolean
    brokerName?: boolean
    currency?: boolean
    isActive?: boolean
    isDefault?: boolean
    color?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradingAccount"]>

  export type TradingAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    accountNumber?: boolean
    brokerName?: boolean
    currency?: boolean
    isActive?: boolean
    isDefault?: boolean
    color?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradingAccount"]>

  export type TradingAccountSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    accountNumber?: boolean
    brokerName?: boolean
    currency?: boolean
    isActive?: boolean
    isDefault?: boolean
    color?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TradingAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "accountNumber" | "brokerName" | "currency" | "isActive" | "isDefault" | "color" | "icon" | "createdAt" | "updatedAt", ExtArgs["result"]["tradingAccount"]>
  export type TradingAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    trades?: boolean | TradingAccount$tradesArgs<ExtArgs>
    accountSummaries?: boolean | TradingAccount$accountSummariesArgs<ExtArgs>
    _count?: boolean | TradingAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TradingAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TradingAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TradingAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TradingAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      trades: Prisma.$TradePayload<ExtArgs>[]
      accountSummaries: Prisma.$AccountSummaryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string | null
      accountNumber: string
      brokerName: string | null
      currency: string
      isActive: boolean
      isDefault: boolean
      color: string | null
      icon: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tradingAccount"]>
    composites: {}
  }

  type TradingAccountGetPayload<S extends boolean | null | undefined | TradingAccountDefaultArgs> = $Result.GetResult<Prisma.$TradingAccountPayload, S>

  type TradingAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TradingAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradingAccountCountAggregateInputType | true
    }

  export interface TradingAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TradingAccount'], meta: { name: 'TradingAccount' } }
    /**
     * Find zero or one TradingAccount that matches the filter.
     * @param {TradingAccountFindUniqueArgs} args - Arguments to find a TradingAccount
     * @example
     * // Get one TradingAccount
     * const tradingAccount = await prisma.tradingAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradingAccountFindUniqueArgs>(args: SelectSubset<T, TradingAccountFindUniqueArgs<ExtArgs>>): Prisma__TradingAccountClient<$Result.GetResult<Prisma.$TradingAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TradingAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradingAccountFindUniqueOrThrowArgs} args - Arguments to find a TradingAccount
     * @example
     * // Get one TradingAccount
     * const tradingAccount = await prisma.tradingAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradingAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, TradingAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradingAccountClient<$Result.GetResult<Prisma.$TradingAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradingAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingAccountFindFirstArgs} args - Arguments to find a TradingAccount
     * @example
     * // Get one TradingAccount
     * const tradingAccount = await prisma.tradingAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradingAccountFindFirstArgs>(args?: SelectSubset<T, TradingAccountFindFirstArgs<ExtArgs>>): Prisma__TradingAccountClient<$Result.GetResult<Prisma.$TradingAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradingAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingAccountFindFirstOrThrowArgs} args - Arguments to find a TradingAccount
     * @example
     * // Get one TradingAccount
     * const tradingAccount = await prisma.tradingAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradingAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, TradingAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradingAccountClient<$Result.GetResult<Prisma.$TradingAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TradingAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TradingAccounts
     * const tradingAccounts = await prisma.tradingAccount.findMany()
     * 
     * // Get first 10 TradingAccounts
     * const tradingAccounts = await prisma.tradingAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradingAccountWithIdOnly = await prisma.tradingAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TradingAccountFindManyArgs>(args?: SelectSubset<T, TradingAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradingAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TradingAccount.
     * @param {TradingAccountCreateArgs} args - Arguments to create a TradingAccount.
     * @example
     * // Create one TradingAccount
     * const TradingAccount = await prisma.tradingAccount.create({
     *   data: {
     *     // ... data to create a TradingAccount
     *   }
     * })
     * 
     */
    create<T extends TradingAccountCreateArgs>(args: SelectSubset<T, TradingAccountCreateArgs<ExtArgs>>): Prisma__TradingAccountClient<$Result.GetResult<Prisma.$TradingAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TradingAccounts.
     * @param {TradingAccountCreateManyArgs} args - Arguments to create many TradingAccounts.
     * @example
     * // Create many TradingAccounts
     * const tradingAccount = await prisma.tradingAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradingAccountCreateManyArgs>(args?: SelectSubset<T, TradingAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TradingAccounts and returns the data saved in the database.
     * @param {TradingAccountCreateManyAndReturnArgs} args - Arguments to create many TradingAccounts.
     * @example
     * // Create many TradingAccounts
     * const tradingAccount = await prisma.tradingAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TradingAccounts and only return the `id`
     * const tradingAccountWithIdOnly = await prisma.tradingAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TradingAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, TradingAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradingAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TradingAccount.
     * @param {TradingAccountDeleteArgs} args - Arguments to delete one TradingAccount.
     * @example
     * // Delete one TradingAccount
     * const TradingAccount = await prisma.tradingAccount.delete({
     *   where: {
     *     // ... filter to delete one TradingAccount
     *   }
     * })
     * 
     */
    delete<T extends TradingAccountDeleteArgs>(args: SelectSubset<T, TradingAccountDeleteArgs<ExtArgs>>): Prisma__TradingAccountClient<$Result.GetResult<Prisma.$TradingAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TradingAccount.
     * @param {TradingAccountUpdateArgs} args - Arguments to update one TradingAccount.
     * @example
     * // Update one TradingAccount
     * const tradingAccount = await prisma.tradingAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradingAccountUpdateArgs>(args: SelectSubset<T, TradingAccountUpdateArgs<ExtArgs>>): Prisma__TradingAccountClient<$Result.GetResult<Prisma.$TradingAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TradingAccounts.
     * @param {TradingAccountDeleteManyArgs} args - Arguments to filter TradingAccounts to delete.
     * @example
     * // Delete a few TradingAccounts
     * const { count } = await prisma.tradingAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradingAccountDeleteManyArgs>(args?: SelectSubset<T, TradingAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradingAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TradingAccounts
     * const tradingAccount = await prisma.tradingAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradingAccountUpdateManyArgs>(args: SelectSubset<T, TradingAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradingAccounts and returns the data updated in the database.
     * @param {TradingAccountUpdateManyAndReturnArgs} args - Arguments to update many TradingAccounts.
     * @example
     * // Update many TradingAccounts
     * const tradingAccount = await prisma.tradingAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TradingAccounts and only return the `id`
     * const tradingAccountWithIdOnly = await prisma.tradingAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TradingAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, TradingAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradingAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TradingAccount.
     * @param {TradingAccountUpsertArgs} args - Arguments to update or create a TradingAccount.
     * @example
     * // Update or create a TradingAccount
     * const tradingAccount = await prisma.tradingAccount.upsert({
     *   create: {
     *     // ... data to create a TradingAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TradingAccount we want to update
     *   }
     * })
     */
    upsert<T extends TradingAccountUpsertArgs>(args: SelectSubset<T, TradingAccountUpsertArgs<ExtArgs>>): Prisma__TradingAccountClient<$Result.GetResult<Prisma.$TradingAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TradingAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingAccountCountArgs} args - Arguments to filter TradingAccounts to count.
     * @example
     * // Count the number of TradingAccounts
     * const count = await prisma.tradingAccount.count({
     *   where: {
     *     // ... the filter for the TradingAccounts we want to count
     *   }
     * })
    **/
    count<T extends TradingAccountCountArgs>(
      args?: Subset<T, TradingAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradingAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TradingAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TradingAccountAggregateArgs>(args: Subset<T, TradingAccountAggregateArgs>): Prisma.PrismaPromise<GetTradingAccountAggregateType<T>>

    /**
     * Group by TradingAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TradingAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradingAccountGroupByArgs['orderBy'] }
        : { orderBy?: TradingAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TradingAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradingAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TradingAccount model
   */
  readonly fields: TradingAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TradingAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradingAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trades<T extends TradingAccount$tradesArgs<ExtArgs> = {}>(args?: Subset<T, TradingAccount$tradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accountSummaries<T extends TradingAccount$accountSummariesArgs<ExtArgs> = {}>(args?: Subset<T, TradingAccount$accountSummariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TradingAccount model
   */
  interface TradingAccountFieldRefs {
    readonly id: FieldRef<"TradingAccount", 'String'>
    readonly userId: FieldRef<"TradingAccount", 'String'>
    readonly name: FieldRef<"TradingAccount", 'String'>
    readonly description: FieldRef<"TradingAccount", 'String'>
    readonly accountNumber: FieldRef<"TradingAccount", 'String'>
    readonly brokerName: FieldRef<"TradingAccount", 'String'>
    readonly currency: FieldRef<"TradingAccount", 'String'>
    readonly isActive: FieldRef<"TradingAccount", 'Boolean'>
    readonly isDefault: FieldRef<"TradingAccount", 'Boolean'>
    readonly color: FieldRef<"TradingAccount", 'String'>
    readonly icon: FieldRef<"TradingAccount", 'String'>
    readonly createdAt: FieldRef<"TradingAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"TradingAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TradingAccount findUnique
   */
  export type TradingAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingAccount
     */
    select?: TradingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingAccount
     */
    omit?: TradingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingAccountInclude<ExtArgs> | null
    /**
     * Filter, which TradingAccount to fetch.
     */
    where: TradingAccountWhereUniqueInput
  }

  /**
   * TradingAccount findUniqueOrThrow
   */
  export type TradingAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingAccount
     */
    select?: TradingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingAccount
     */
    omit?: TradingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingAccountInclude<ExtArgs> | null
    /**
     * Filter, which TradingAccount to fetch.
     */
    where: TradingAccountWhereUniqueInput
  }

  /**
   * TradingAccount findFirst
   */
  export type TradingAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingAccount
     */
    select?: TradingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingAccount
     */
    omit?: TradingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingAccountInclude<ExtArgs> | null
    /**
     * Filter, which TradingAccount to fetch.
     */
    where?: TradingAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradingAccounts to fetch.
     */
    orderBy?: TradingAccountOrderByWithRelationInput | TradingAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TradingAccounts.
     */
    cursor?: TradingAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradingAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradingAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TradingAccounts.
     */
    distinct?: TradingAccountScalarFieldEnum | TradingAccountScalarFieldEnum[]
  }

  /**
   * TradingAccount findFirstOrThrow
   */
  export type TradingAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingAccount
     */
    select?: TradingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingAccount
     */
    omit?: TradingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingAccountInclude<ExtArgs> | null
    /**
     * Filter, which TradingAccount to fetch.
     */
    where?: TradingAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradingAccounts to fetch.
     */
    orderBy?: TradingAccountOrderByWithRelationInput | TradingAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TradingAccounts.
     */
    cursor?: TradingAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradingAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradingAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TradingAccounts.
     */
    distinct?: TradingAccountScalarFieldEnum | TradingAccountScalarFieldEnum[]
  }

  /**
   * TradingAccount findMany
   */
  export type TradingAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingAccount
     */
    select?: TradingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingAccount
     */
    omit?: TradingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingAccountInclude<ExtArgs> | null
    /**
     * Filter, which TradingAccounts to fetch.
     */
    where?: TradingAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradingAccounts to fetch.
     */
    orderBy?: TradingAccountOrderByWithRelationInput | TradingAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TradingAccounts.
     */
    cursor?: TradingAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradingAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradingAccounts.
     */
    skip?: number
    distinct?: TradingAccountScalarFieldEnum | TradingAccountScalarFieldEnum[]
  }

  /**
   * TradingAccount create
   */
  export type TradingAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingAccount
     */
    select?: TradingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingAccount
     */
    omit?: TradingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a TradingAccount.
     */
    data: XOR<TradingAccountCreateInput, TradingAccountUncheckedCreateInput>
  }

  /**
   * TradingAccount createMany
   */
  export type TradingAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TradingAccounts.
     */
    data: TradingAccountCreateManyInput | TradingAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TradingAccount createManyAndReturn
   */
  export type TradingAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingAccount
     */
    select?: TradingAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TradingAccount
     */
    omit?: TradingAccountOmit<ExtArgs> | null
    /**
     * The data used to create many TradingAccounts.
     */
    data: TradingAccountCreateManyInput | TradingAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TradingAccount update
   */
  export type TradingAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingAccount
     */
    select?: TradingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingAccount
     */
    omit?: TradingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a TradingAccount.
     */
    data: XOR<TradingAccountUpdateInput, TradingAccountUncheckedUpdateInput>
    /**
     * Choose, which TradingAccount to update.
     */
    where: TradingAccountWhereUniqueInput
  }

  /**
   * TradingAccount updateMany
   */
  export type TradingAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TradingAccounts.
     */
    data: XOR<TradingAccountUpdateManyMutationInput, TradingAccountUncheckedUpdateManyInput>
    /**
     * Filter which TradingAccounts to update
     */
    where?: TradingAccountWhereInput
    /**
     * Limit how many TradingAccounts to update.
     */
    limit?: number
  }

  /**
   * TradingAccount updateManyAndReturn
   */
  export type TradingAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingAccount
     */
    select?: TradingAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TradingAccount
     */
    omit?: TradingAccountOmit<ExtArgs> | null
    /**
     * The data used to update TradingAccounts.
     */
    data: XOR<TradingAccountUpdateManyMutationInput, TradingAccountUncheckedUpdateManyInput>
    /**
     * Filter which TradingAccounts to update
     */
    where?: TradingAccountWhereInput
    /**
     * Limit how many TradingAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TradingAccount upsert
   */
  export type TradingAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingAccount
     */
    select?: TradingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingAccount
     */
    omit?: TradingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the TradingAccount to update in case it exists.
     */
    where: TradingAccountWhereUniqueInput
    /**
     * In case the TradingAccount found by the `where` argument doesn't exist, create a new TradingAccount with this data.
     */
    create: XOR<TradingAccountCreateInput, TradingAccountUncheckedCreateInput>
    /**
     * In case the TradingAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradingAccountUpdateInput, TradingAccountUncheckedUpdateInput>
  }

  /**
   * TradingAccount delete
   */
  export type TradingAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingAccount
     */
    select?: TradingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingAccount
     */
    omit?: TradingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingAccountInclude<ExtArgs> | null
    /**
     * Filter which TradingAccount to delete.
     */
    where: TradingAccountWhereUniqueInput
  }

  /**
   * TradingAccount deleteMany
   */
  export type TradingAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TradingAccounts to delete
     */
    where?: TradingAccountWhereInput
    /**
     * Limit how many TradingAccounts to delete.
     */
    limit?: number
  }

  /**
   * TradingAccount.trades
   */
  export type TradingAccount$tradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    cursor?: TradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * TradingAccount.accountSummaries
   */
  export type TradingAccount$accountSummariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSummary
     */
    select?: AccountSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSummary
     */
    omit?: AccountSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSummaryInclude<ExtArgs> | null
    where?: AccountSummaryWhereInput
    orderBy?: AccountSummaryOrderByWithRelationInput | AccountSummaryOrderByWithRelationInput[]
    cursor?: AccountSummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountSummaryScalarFieldEnum | AccountSummaryScalarFieldEnum[]
  }

  /**
   * TradingAccount without action
   */
  export type TradingAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingAccount
     */
    select?: TradingAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingAccount
     */
    omit?: TradingAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingAccountInclude<ExtArgs> | null
  }


  /**
   * Model Trade
   */

  export type AggregateTrade = {
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  export type TradeAvgAggregateOutputType = {
    size: number | null
    price: number | null
    exitPrice: number | null
    commission: number | null
    fee: number | null
    swap: number | null
    profit: number | null
  }

  export type TradeSumAggregateOutputType = {
    size: number | null
    price: number | null
    exitPrice: number | null
    commission: number | null
    fee: number | null
    swap: number | null
    profit: number | null
  }

  export type TradeMinAggregateOutputType = {
    id: string | null
    tradingAccountId: string | null
    openTime: string | null
    ticket: string | null
    type: $Enums.TradeType | null
    size: number | null
    instrument: string | null
    price: number | null
    exitPrice: number | null
    orderId: string | null
    comment: string | null
    entry: $Enums.TradeEntry | null
    commission: number | null
    fee: number | null
    swap: number | null
    profit: number | null
    notes: string | null
    tags: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TradeMaxAggregateOutputType = {
    id: string | null
    tradingAccountId: string | null
    openTime: string | null
    ticket: string | null
    type: $Enums.TradeType | null
    size: number | null
    instrument: string | null
    price: number | null
    exitPrice: number | null
    orderId: string | null
    comment: string | null
    entry: $Enums.TradeEntry | null
    commission: number | null
    fee: number | null
    swap: number | null
    profit: number | null
    notes: string | null
    tags: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TradeCountAggregateOutputType = {
    id: number
    tradingAccountId: number
    openTime: number
    ticket: number
    type: number
    size: number
    instrument: number
    price: number
    exitPrice: number
    orderId: number
    comment: number
    entry: number
    commission: number
    fee: number
    swap: number
    profit: number
    notes: number
    tags: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TradeAvgAggregateInputType = {
    size?: true
    price?: true
    exitPrice?: true
    commission?: true
    fee?: true
    swap?: true
    profit?: true
  }

  export type TradeSumAggregateInputType = {
    size?: true
    price?: true
    exitPrice?: true
    commission?: true
    fee?: true
    swap?: true
    profit?: true
  }

  export type TradeMinAggregateInputType = {
    id?: true
    tradingAccountId?: true
    openTime?: true
    ticket?: true
    type?: true
    size?: true
    instrument?: true
    price?: true
    exitPrice?: true
    orderId?: true
    comment?: true
    entry?: true
    commission?: true
    fee?: true
    swap?: true
    profit?: true
    notes?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TradeMaxAggregateInputType = {
    id?: true
    tradingAccountId?: true
    openTime?: true
    ticket?: true
    type?: true
    size?: true
    instrument?: true
    price?: true
    exitPrice?: true
    orderId?: true
    comment?: true
    entry?: true
    commission?: true
    fee?: true
    swap?: true
    profit?: true
    notes?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TradeCountAggregateInputType = {
    id?: true
    tradingAccountId?: true
    openTime?: true
    ticket?: true
    type?: true
    size?: true
    instrument?: true
    price?: true
    exitPrice?: true
    orderId?: true
    comment?: true
    entry?: true
    commission?: true
    fee?: true
    swap?: true
    profit?: true
    notes?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trade to aggregate.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trades
    **/
    _count?: true | TradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradeMaxAggregateInputType
  }

  export type GetTradeAggregateType<T extends TradeAggregateArgs> = {
        [P in keyof T & keyof AggregateTrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrade[P]>
      : GetScalarType<T[P], AggregateTrade[P]>
  }




  export type TradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithAggregationInput | TradeOrderByWithAggregationInput[]
    by: TradeScalarFieldEnum[] | TradeScalarFieldEnum
    having?: TradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradeCountAggregateInputType | true
    _avg?: TradeAvgAggregateInputType
    _sum?: TradeSumAggregateInputType
    _min?: TradeMinAggregateInputType
    _max?: TradeMaxAggregateInputType
  }

  export type TradeGroupByOutputType = {
    id: string
    tradingAccountId: string
    openTime: string
    ticket: string
    type: $Enums.TradeType
    size: number
    instrument: string
    price: number
    exitPrice: number | null
    orderId: string | null
    comment: string | null
    entry: $Enums.TradeEntry
    commission: number
    fee: number
    swap: number
    profit: number
    notes: string | null
    tags: string | null
    createdAt: Date
    updatedAt: Date
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  type GetTradeGroupByPayload<T extends TradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradeGroupByOutputType[P]>
            : GetScalarType<T[P], TradeGroupByOutputType[P]>
        }
      >
    >


  export type TradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradingAccountId?: boolean
    openTime?: boolean
    ticket?: boolean
    type?: boolean
    size?: boolean
    instrument?: boolean
    price?: boolean
    exitPrice?: boolean
    orderId?: boolean
    comment?: boolean
    entry?: boolean
    commission?: boolean
    fee?: boolean
    swap?: boolean
    profit?: boolean
    notes?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tradingAccount?: boolean | TradingAccountDefaultArgs<ExtArgs>
    tradeNotes?: boolean | Trade$tradeNotesArgs<ExtArgs>
    _count?: boolean | TradeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradingAccountId?: boolean
    openTime?: boolean
    ticket?: boolean
    type?: boolean
    size?: boolean
    instrument?: boolean
    price?: boolean
    exitPrice?: boolean
    orderId?: boolean
    comment?: boolean
    entry?: boolean
    commission?: boolean
    fee?: boolean
    swap?: boolean
    profit?: boolean
    notes?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tradingAccount?: boolean | TradingAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradingAccountId?: boolean
    openTime?: boolean
    ticket?: boolean
    type?: boolean
    size?: boolean
    instrument?: boolean
    price?: boolean
    exitPrice?: boolean
    orderId?: boolean
    comment?: boolean
    entry?: boolean
    commission?: boolean
    fee?: boolean
    swap?: boolean
    profit?: boolean
    notes?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tradingAccount?: boolean | TradingAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectScalar = {
    id?: boolean
    tradingAccountId?: boolean
    openTime?: boolean
    ticket?: boolean
    type?: boolean
    size?: boolean
    instrument?: boolean
    price?: boolean
    exitPrice?: boolean
    orderId?: boolean
    comment?: boolean
    entry?: boolean
    commission?: boolean
    fee?: boolean
    swap?: boolean
    profit?: boolean
    notes?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tradingAccountId" | "openTime" | "ticket" | "type" | "size" | "instrument" | "price" | "exitPrice" | "orderId" | "comment" | "entry" | "commission" | "fee" | "swap" | "profit" | "notes" | "tags" | "createdAt" | "updatedAt", ExtArgs["result"]["trade"]>
  export type TradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tradingAccount?: boolean | TradingAccountDefaultArgs<ExtArgs>
    tradeNotes?: boolean | Trade$tradeNotesArgs<ExtArgs>
    _count?: boolean | TradeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TradeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tradingAccount?: boolean | TradingAccountDefaultArgs<ExtArgs>
  }
  export type TradeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tradingAccount?: boolean | TradingAccountDefaultArgs<ExtArgs>
  }

  export type $TradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trade"
    objects: {
      tradingAccount: Prisma.$TradingAccountPayload<ExtArgs>
      tradeNotes: Prisma.$TradeNotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tradingAccountId: string
      openTime: string
      ticket: string
      type: $Enums.TradeType
      size: number
      instrument: string
      price: number
      exitPrice: number | null
      orderId: string | null
      comment: string | null
      entry: $Enums.TradeEntry
      commission: number
      fee: number
      swap: number
      profit: number
      notes: string | null
      tags: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trade"]>
    composites: {}
  }

  type TradeGetPayload<S extends boolean | null | undefined | TradeDefaultArgs> = $Result.GetResult<Prisma.$TradePayload, S>

  type TradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradeCountAggregateInputType | true
    }

  export interface TradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trade'], meta: { name: 'Trade' } }
    /**
     * Find zero or one Trade that matches the filter.
     * @param {TradeFindUniqueArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradeFindUniqueArgs>(args: SelectSubset<T, TradeFindUniqueArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradeFindUniqueOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradeFindUniqueOrThrowArgs>(args: SelectSubset<T, TradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradeFindFirstArgs>(args?: SelectSubset<T, TradeFindFirstArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradeFindFirstOrThrowArgs>(args?: SelectSubset<T, TradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trades
     * const trades = await prisma.trade.findMany()
     * 
     * // Get first 10 Trades
     * const trades = await prisma.trade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradeWithIdOnly = await prisma.trade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TradeFindManyArgs>(args?: SelectSubset<T, TradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trade.
     * @param {TradeCreateArgs} args - Arguments to create a Trade.
     * @example
     * // Create one Trade
     * const Trade = await prisma.trade.create({
     *   data: {
     *     // ... data to create a Trade
     *   }
     * })
     * 
     */
    create<T extends TradeCreateArgs>(args: SelectSubset<T, TradeCreateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trades.
     * @param {TradeCreateManyArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradeCreateManyArgs>(args?: SelectSubset<T, TradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trades and returns the data saved in the database.
     * @param {TradeCreateManyAndReturnArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trades and only return the `id`
     * const tradeWithIdOnly = await prisma.trade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TradeCreateManyAndReturnArgs>(args?: SelectSubset<T, TradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trade.
     * @param {TradeDeleteArgs} args - Arguments to delete one Trade.
     * @example
     * // Delete one Trade
     * const Trade = await prisma.trade.delete({
     *   where: {
     *     // ... filter to delete one Trade
     *   }
     * })
     * 
     */
    delete<T extends TradeDeleteArgs>(args: SelectSubset<T, TradeDeleteArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trade.
     * @param {TradeUpdateArgs} args - Arguments to update one Trade.
     * @example
     * // Update one Trade
     * const trade = await prisma.trade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradeUpdateArgs>(args: SelectSubset<T, TradeUpdateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trades.
     * @param {TradeDeleteManyArgs} args - Arguments to filter Trades to delete.
     * @example
     * // Delete a few Trades
     * const { count } = await prisma.trade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradeDeleteManyArgs>(args?: SelectSubset<T, TradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradeUpdateManyArgs>(args: SelectSubset<T, TradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades and returns the data updated in the database.
     * @param {TradeUpdateManyAndReturnArgs} args - Arguments to update many Trades.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trades and only return the `id`
     * const tradeWithIdOnly = await prisma.trade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TradeUpdateManyAndReturnArgs>(args: SelectSubset<T, TradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trade.
     * @param {TradeUpsertArgs} args - Arguments to update or create a Trade.
     * @example
     * // Update or create a Trade
     * const trade = await prisma.trade.upsert({
     *   create: {
     *     // ... data to create a Trade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trade we want to update
     *   }
     * })
     */
    upsert<T extends TradeUpsertArgs>(args: SelectSubset<T, TradeUpsertArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeCountArgs} args - Arguments to filter Trades to count.
     * @example
     * // Count the number of Trades
     * const count = await prisma.trade.count({
     *   where: {
     *     // ... the filter for the Trades we want to count
     *   }
     * })
    **/
    count<T extends TradeCountArgs>(
      args?: Subset<T, TradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TradeAggregateArgs>(args: Subset<T, TradeAggregateArgs>): Prisma.PrismaPromise<GetTradeAggregateType<T>>

    /**
     * Group by Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradeGroupByArgs['orderBy'] }
        : { orderBy?: TradeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trade model
   */
  readonly fields: TradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tradingAccount<T extends TradingAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TradingAccountDefaultArgs<ExtArgs>>): Prisma__TradingAccountClient<$Result.GetResult<Prisma.$TradingAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tradeNotes<T extends Trade$tradeNotesArgs<ExtArgs> = {}>(args?: Subset<T, Trade$tradeNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradeNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trade model
   */
  interface TradeFieldRefs {
    readonly id: FieldRef<"Trade", 'String'>
    readonly tradingAccountId: FieldRef<"Trade", 'String'>
    readonly openTime: FieldRef<"Trade", 'String'>
    readonly ticket: FieldRef<"Trade", 'String'>
    readonly type: FieldRef<"Trade", 'TradeType'>
    readonly size: FieldRef<"Trade", 'Float'>
    readonly instrument: FieldRef<"Trade", 'String'>
    readonly price: FieldRef<"Trade", 'Float'>
    readonly exitPrice: FieldRef<"Trade", 'Float'>
    readonly orderId: FieldRef<"Trade", 'String'>
    readonly comment: FieldRef<"Trade", 'String'>
    readonly entry: FieldRef<"Trade", 'TradeEntry'>
    readonly commission: FieldRef<"Trade", 'Float'>
    readonly fee: FieldRef<"Trade", 'Float'>
    readonly swap: FieldRef<"Trade", 'Float'>
    readonly profit: FieldRef<"Trade", 'Float'>
    readonly notes: FieldRef<"Trade", 'String'>
    readonly tags: FieldRef<"Trade", 'String'>
    readonly createdAt: FieldRef<"Trade", 'DateTime'>
    readonly updatedAt: FieldRef<"Trade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trade findUnique
   */
  export type TradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade findUniqueOrThrow
   */
  export type TradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade findFirst
   */
  export type TradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade findFirstOrThrow
   */
  export type TradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade findMany
   */
  export type TradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trades to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade create
   */
  export type TradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The data needed to create a Trade.
     */
    data: XOR<TradeCreateInput, TradeUncheckedCreateInput>
  }

  /**
   * Trade createMany
   */
  export type TradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trade createManyAndReturn
   */
  export type TradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trade update
   */
  export type TradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The data needed to update a Trade.
     */
    data: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
    /**
     * Choose, which Trade to update.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade updateMany
   */
  export type TradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
  }

  /**
   * Trade updateManyAndReturn
   */
  export type TradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trade upsert
   */
  export type TradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The filter to search for the Trade to update in case it exists.
     */
    where: TradeWhereUniqueInput
    /**
     * In case the Trade found by the `where` argument doesn't exist, create a new Trade with this data.
     */
    create: XOR<TradeCreateInput, TradeUncheckedCreateInput>
    /**
     * In case the Trade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
  }

  /**
   * Trade delete
   */
  export type TradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter which Trade to delete.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade deleteMany
   */
  export type TradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trades to delete
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to delete.
     */
    limit?: number
  }

  /**
   * Trade.tradeNotes
   */
  export type Trade$tradeNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeNote
     */
    select?: TradeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeNote
     */
    omit?: TradeNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeNoteInclude<ExtArgs> | null
    where?: TradeNoteWhereInput
    orderBy?: TradeNoteOrderByWithRelationInput | TradeNoteOrderByWithRelationInput[]
    cursor?: TradeNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeNoteScalarFieldEnum | TradeNoteScalarFieldEnum[]
  }

  /**
   * Trade without action
   */
  export type TradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
  }


  /**
   * Model TradeNote
   */

  export type AggregateTradeNote = {
    _count: TradeNoteCountAggregateOutputType | null
    _avg: TradeNoteAvgAggregateOutputType | null
    _sum: TradeNoteSumAggregateOutputType | null
    _min: TradeNoteMinAggregateOutputType | null
    _max: TradeNoteMaxAggregateOutputType | null
  }

  export type TradeNoteAvgAggregateOutputType = {
    convictionBefore: number | null
    emotionAfter: number | null
  }

  export type TradeNoteSumAggregateOutputType = {
    convictionBefore: number | null
    emotionAfter: number | null
  }

  export type TradeNoteMinAggregateOutputType = {
    id: string | null
    tradeId: string | null
    userId: string | null
    title: string | null
    content: string | null
    convictionBefore: number | null
    emotionAfter: number | null
    category: string | null
    tags: string | null
    isPrivate: boolean | null
    isPinned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TradeNoteMaxAggregateOutputType = {
    id: string | null
    tradeId: string | null
    userId: string | null
    title: string | null
    content: string | null
    convictionBefore: number | null
    emotionAfter: number | null
    category: string | null
    tags: string | null
    isPrivate: boolean | null
    isPinned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TradeNoteCountAggregateOutputType = {
    id: number
    tradeId: number
    userId: number
    title: number
    content: number
    convictionBefore: number
    emotionAfter: number
    category: number
    tags: number
    isPrivate: number
    isPinned: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TradeNoteAvgAggregateInputType = {
    convictionBefore?: true
    emotionAfter?: true
  }

  export type TradeNoteSumAggregateInputType = {
    convictionBefore?: true
    emotionAfter?: true
  }

  export type TradeNoteMinAggregateInputType = {
    id?: true
    tradeId?: true
    userId?: true
    title?: true
    content?: true
    convictionBefore?: true
    emotionAfter?: true
    category?: true
    tags?: true
    isPrivate?: true
    isPinned?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TradeNoteMaxAggregateInputType = {
    id?: true
    tradeId?: true
    userId?: true
    title?: true
    content?: true
    convictionBefore?: true
    emotionAfter?: true
    category?: true
    tags?: true
    isPrivate?: true
    isPinned?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TradeNoteCountAggregateInputType = {
    id?: true
    tradeId?: true
    userId?: true
    title?: true
    content?: true
    convictionBefore?: true
    emotionAfter?: true
    category?: true
    tags?: true
    isPrivate?: true
    isPinned?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TradeNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TradeNote to aggregate.
     */
    where?: TradeNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradeNotes to fetch.
     */
    orderBy?: TradeNoteOrderByWithRelationInput | TradeNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradeNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradeNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradeNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TradeNotes
    **/
    _count?: true | TradeNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TradeNoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TradeNoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradeNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradeNoteMaxAggregateInputType
  }

  export type GetTradeNoteAggregateType<T extends TradeNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateTradeNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTradeNote[P]>
      : GetScalarType<T[P], AggregateTradeNote[P]>
  }




  export type TradeNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeNoteWhereInput
    orderBy?: TradeNoteOrderByWithAggregationInput | TradeNoteOrderByWithAggregationInput[]
    by: TradeNoteScalarFieldEnum[] | TradeNoteScalarFieldEnum
    having?: TradeNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradeNoteCountAggregateInputType | true
    _avg?: TradeNoteAvgAggregateInputType
    _sum?: TradeNoteSumAggregateInputType
    _min?: TradeNoteMinAggregateInputType
    _max?: TradeNoteMaxAggregateInputType
  }

  export type TradeNoteGroupByOutputType = {
    id: string
    tradeId: string | null
    userId: string
    title: string
    content: string
    convictionBefore: number | null
    emotionAfter: number | null
    category: string | null
    tags: string | null
    isPrivate: boolean
    isPinned: boolean
    createdAt: Date
    updatedAt: Date
    _count: TradeNoteCountAggregateOutputType | null
    _avg: TradeNoteAvgAggregateOutputType | null
    _sum: TradeNoteSumAggregateOutputType | null
    _min: TradeNoteMinAggregateOutputType | null
    _max: TradeNoteMaxAggregateOutputType | null
  }

  type GetTradeNoteGroupByPayload<T extends TradeNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradeNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradeNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradeNoteGroupByOutputType[P]>
            : GetScalarType<T[P], TradeNoteGroupByOutputType[P]>
        }
      >
    >


  export type TradeNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeId?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    convictionBefore?: boolean
    emotionAfter?: boolean
    category?: boolean
    tags?: boolean
    isPrivate?: boolean
    isPinned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trade?: boolean | TradeNote$tradeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradeNote"]>

  export type TradeNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeId?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    convictionBefore?: boolean
    emotionAfter?: boolean
    category?: boolean
    tags?: boolean
    isPrivate?: boolean
    isPinned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trade?: boolean | TradeNote$tradeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradeNote"]>

  export type TradeNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeId?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    convictionBefore?: boolean
    emotionAfter?: boolean
    category?: boolean
    tags?: boolean
    isPrivate?: boolean
    isPinned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trade?: boolean | TradeNote$tradeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradeNote"]>

  export type TradeNoteSelectScalar = {
    id?: boolean
    tradeId?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    convictionBefore?: boolean
    emotionAfter?: boolean
    category?: boolean
    tags?: boolean
    isPrivate?: boolean
    isPinned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TradeNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tradeId" | "userId" | "title" | "content" | "convictionBefore" | "emotionAfter" | "category" | "tags" | "isPrivate" | "isPinned" | "createdAt" | "updatedAt", ExtArgs["result"]["tradeNote"]>
  export type TradeNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trade?: boolean | TradeNote$tradeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TradeNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trade?: boolean | TradeNote$tradeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TradeNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trade?: boolean | TradeNote$tradeArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TradeNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TradeNote"
    objects: {
      trade: Prisma.$TradePayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tradeId: string | null
      userId: string
      title: string
      content: string
      convictionBefore: number | null
      emotionAfter: number | null
      category: string | null
      tags: string | null
      isPrivate: boolean
      isPinned: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tradeNote"]>
    composites: {}
  }

  type TradeNoteGetPayload<S extends boolean | null | undefined | TradeNoteDefaultArgs> = $Result.GetResult<Prisma.$TradeNotePayload, S>

  type TradeNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TradeNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradeNoteCountAggregateInputType | true
    }

  export interface TradeNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TradeNote'], meta: { name: 'TradeNote' } }
    /**
     * Find zero or one TradeNote that matches the filter.
     * @param {TradeNoteFindUniqueArgs} args - Arguments to find a TradeNote
     * @example
     * // Get one TradeNote
     * const tradeNote = await prisma.tradeNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradeNoteFindUniqueArgs>(args: SelectSubset<T, TradeNoteFindUniqueArgs<ExtArgs>>): Prisma__TradeNoteClient<$Result.GetResult<Prisma.$TradeNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TradeNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradeNoteFindUniqueOrThrowArgs} args - Arguments to find a TradeNote
     * @example
     * // Get one TradeNote
     * const tradeNote = await prisma.tradeNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradeNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, TradeNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradeNoteClient<$Result.GetResult<Prisma.$TradeNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradeNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeNoteFindFirstArgs} args - Arguments to find a TradeNote
     * @example
     * // Get one TradeNote
     * const tradeNote = await prisma.tradeNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradeNoteFindFirstArgs>(args?: SelectSubset<T, TradeNoteFindFirstArgs<ExtArgs>>): Prisma__TradeNoteClient<$Result.GetResult<Prisma.$TradeNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradeNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeNoteFindFirstOrThrowArgs} args - Arguments to find a TradeNote
     * @example
     * // Get one TradeNote
     * const tradeNote = await prisma.tradeNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradeNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, TradeNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradeNoteClient<$Result.GetResult<Prisma.$TradeNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TradeNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TradeNotes
     * const tradeNotes = await prisma.tradeNote.findMany()
     * 
     * // Get first 10 TradeNotes
     * const tradeNotes = await prisma.tradeNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradeNoteWithIdOnly = await prisma.tradeNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TradeNoteFindManyArgs>(args?: SelectSubset<T, TradeNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradeNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TradeNote.
     * @param {TradeNoteCreateArgs} args - Arguments to create a TradeNote.
     * @example
     * // Create one TradeNote
     * const TradeNote = await prisma.tradeNote.create({
     *   data: {
     *     // ... data to create a TradeNote
     *   }
     * })
     * 
     */
    create<T extends TradeNoteCreateArgs>(args: SelectSubset<T, TradeNoteCreateArgs<ExtArgs>>): Prisma__TradeNoteClient<$Result.GetResult<Prisma.$TradeNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TradeNotes.
     * @param {TradeNoteCreateManyArgs} args - Arguments to create many TradeNotes.
     * @example
     * // Create many TradeNotes
     * const tradeNote = await prisma.tradeNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradeNoteCreateManyArgs>(args?: SelectSubset<T, TradeNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TradeNotes and returns the data saved in the database.
     * @param {TradeNoteCreateManyAndReturnArgs} args - Arguments to create many TradeNotes.
     * @example
     * // Create many TradeNotes
     * const tradeNote = await prisma.tradeNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TradeNotes and only return the `id`
     * const tradeNoteWithIdOnly = await prisma.tradeNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TradeNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, TradeNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradeNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TradeNote.
     * @param {TradeNoteDeleteArgs} args - Arguments to delete one TradeNote.
     * @example
     * // Delete one TradeNote
     * const TradeNote = await prisma.tradeNote.delete({
     *   where: {
     *     // ... filter to delete one TradeNote
     *   }
     * })
     * 
     */
    delete<T extends TradeNoteDeleteArgs>(args: SelectSubset<T, TradeNoteDeleteArgs<ExtArgs>>): Prisma__TradeNoteClient<$Result.GetResult<Prisma.$TradeNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TradeNote.
     * @param {TradeNoteUpdateArgs} args - Arguments to update one TradeNote.
     * @example
     * // Update one TradeNote
     * const tradeNote = await prisma.tradeNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradeNoteUpdateArgs>(args: SelectSubset<T, TradeNoteUpdateArgs<ExtArgs>>): Prisma__TradeNoteClient<$Result.GetResult<Prisma.$TradeNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TradeNotes.
     * @param {TradeNoteDeleteManyArgs} args - Arguments to filter TradeNotes to delete.
     * @example
     * // Delete a few TradeNotes
     * const { count } = await prisma.tradeNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradeNoteDeleteManyArgs>(args?: SelectSubset<T, TradeNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradeNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TradeNotes
     * const tradeNote = await prisma.tradeNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradeNoteUpdateManyArgs>(args: SelectSubset<T, TradeNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradeNotes and returns the data updated in the database.
     * @param {TradeNoteUpdateManyAndReturnArgs} args - Arguments to update many TradeNotes.
     * @example
     * // Update many TradeNotes
     * const tradeNote = await prisma.tradeNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TradeNotes and only return the `id`
     * const tradeNoteWithIdOnly = await prisma.tradeNote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TradeNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, TradeNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradeNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TradeNote.
     * @param {TradeNoteUpsertArgs} args - Arguments to update or create a TradeNote.
     * @example
     * // Update or create a TradeNote
     * const tradeNote = await prisma.tradeNote.upsert({
     *   create: {
     *     // ... data to create a TradeNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TradeNote we want to update
     *   }
     * })
     */
    upsert<T extends TradeNoteUpsertArgs>(args: SelectSubset<T, TradeNoteUpsertArgs<ExtArgs>>): Prisma__TradeNoteClient<$Result.GetResult<Prisma.$TradeNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TradeNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeNoteCountArgs} args - Arguments to filter TradeNotes to count.
     * @example
     * // Count the number of TradeNotes
     * const count = await prisma.tradeNote.count({
     *   where: {
     *     // ... the filter for the TradeNotes we want to count
     *   }
     * })
    **/
    count<T extends TradeNoteCountArgs>(
      args?: Subset<T, TradeNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradeNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TradeNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TradeNoteAggregateArgs>(args: Subset<T, TradeNoteAggregateArgs>): Prisma.PrismaPromise<GetTradeNoteAggregateType<T>>

    /**
     * Group by TradeNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeNoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TradeNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradeNoteGroupByArgs['orderBy'] }
        : { orderBy?: TradeNoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TradeNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TradeNote model
   */
  readonly fields: TradeNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TradeNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradeNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trade<T extends TradeNote$tradeArgs<ExtArgs> = {}>(args?: Subset<T, TradeNote$tradeArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TradeNote model
   */
  interface TradeNoteFieldRefs {
    readonly id: FieldRef<"TradeNote", 'String'>
    readonly tradeId: FieldRef<"TradeNote", 'String'>
    readonly userId: FieldRef<"TradeNote", 'String'>
    readonly title: FieldRef<"TradeNote", 'String'>
    readonly content: FieldRef<"TradeNote", 'String'>
    readonly convictionBefore: FieldRef<"TradeNote", 'Int'>
    readonly emotionAfter: FieldRef<"TradeNote", 'Int'>
    readonly category: FieldRef<"TradeNote", 'String'>
    readonly tags: FieldRef<"TradeNote", 'String'>
    readonly isPrivate: FieldRef<"TradeNote", 'Boolean'>
    readonly isPinned: FieldRef<"TradeNote", 'Boolean'>
    readonly createdAt: FieldRef<"TradeNote", 'DateTime'>
    readonly updatedAt: FieldRef<"TradeNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TradeNote findUnique
   */
  export type TradeNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeNote
     */
    select?: TradeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeNote
     */
    omit?: TradeNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeNoteInclude<ExtArgs> | null
    /**
     * Filter, which TradeNote to fetch.
     */
    where: TradeNoteWhereUniqueInput
  }

  /**
   * TradeNote findUniqueOrThrow
   */
  export type TradeNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeNote
     */
    select?: TradeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeNote
     */
    omit?: TradeNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeNoteInclude<ExtArgs> | null
    /**
     * Filter, which TradeNote to fetch.
     */
    where: TradeNoteWhereUniqueInput
  }

  /**
   * TradeNote findFirst
   */
  export type TradeNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeNote
     */
    select?: TradeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeNote
     */
    omit?: TradeNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeNoteInclude<ExtArgs> | null
    /**
     * Filter, which TradeNote to fetch.
     */
    where?: TradeNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradeNotes to fetch.
     */
    orderBy?: TradeNoteOrderByWithRelationInput | TradeNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TradeNotes.
     */
    cursor?: TradeNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradeNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradeNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TradeNotes.
     */
    distinct?: TradeNoteScalarFieldEnum | TradeNoteScalarFieldEnum[]
  }

  /**
   * TradeNote findFirstOrThrow
   */
  export type TradeNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeNote
     */
    select?: TradeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeNote
     */
    omit?: TradeNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeNoteInclude<ExtArgs> | null
    /**
     * Filter, which TradeNote to fetch.
     */
    where?: TradeNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradeNotes to fetch.
     */
    orderBy?: TradeNoteOrderByWithRelationInput | TradeNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TradeNotes.
     */
    cursor?: TradeNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradeNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradeNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TradeNotes.
     */
    distinct?: TradeNoteScalarFieldEnum | TradeNoteScalarFieldEnum[]
  }

  /**
   * TradeNote findMany
   */
  export type TradeNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeNote
     */
    select?: TradeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeNote
     */
    omit?: TradeNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeNoteInclude<ExtArgs> | null
    /**
     * Filter, which TradeNotes to fetch.
     */
    where?: TradeNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradeNotes to fetch.
     */
    orderBy?: TradeNoteOrderByWithRelationInput | TradeNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TradeNotes.
     */
    cursor?: TradeNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradeNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradeNotes.
     */
    skip?: number
    distinct?: TradeNoteScalarFieldEnum | TradeNoteScalarFieldEnum[]
  }

  /**
   * TradeNote create
   */
  export type TradeNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeNote
     */
    select?: TradeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeNote
     */
    omit?: TradeNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a TradeNote.
     */
    data: XOR<TradeNoteCreateInput, TradeNoteUncheckedCreateInput>
  }

  /**
   * TradeNote createMany
   */
  export type TradeNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TradeNotes.
     */
    data: TradeNoteCreateManyInput | TradeNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TradeNote createManyAndReturn
   */
  export type TradeNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeNote
     */
    select?: TradeNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TradeNote
     */
    omit?: TradeNoteOmit<ExtArgs> | null
    /**
     * The data used to create many TradeNotes.
     */
    data: TradeNoteCreateManyInput | TradeNoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TradeNote update
   */
  export type TradeNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeNote
     */
    select?: TradeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeNote
     */
    omit?: TradeNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a TradeNote.
     */
    data: XOR<TradeNoteUpdateInput, TradeNoteUncheckedUpdateInput>
    /**
     * Choose, which TradeNote to update.
     */
    where: TradeNoteWhereUniqueInput
  }

  /**
   * TradeNote updateMany
   */
  export type TradeNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TradeNotes.
     */
    data: XOR<TradeNoteUpdateManyMutationInput, TradeNoteUncheckedUpdateManyInput>
    /**
     * Filter which TradeNotes to update
     */
    where?: TradeNoteWhereInput
    /**
     * Limit how many TradeNotes to update.
     */
    limit?: number
  }

  /**
   * TradeNote updateManyAndReturn
   */
  export type TradeNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeNote
     */
    select?: TradeNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TradeNote
     */
    omit?: TradeNoteOmit<ExtArgs> | null
    /**
     * The data used to update TradeNotes.
     */
    data: XOR<TradeNoteUpdateManyMutationInput, TradeNoteUncheckedUpdateManyInput>
    /**
     * Filter which TradeNotes to update
     */
    where?: TradeNoteWhereInput
    /**
     * Limit how many TradeNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TradeNote upsert
   */
  export type TradeNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeNote
     */
    select?: TradeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeNote
     */
    omit?: TradeNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the TradeNote to update in case it exists.
     */
    where: TradeNoteWhereUniqueInput
    /**
     * In case the TradeNote found by the `where` argument doesn't exist, create a new TradeNote with this data.
     */
    create: XOR<TradeNoteCreateInput, TradeNoteUncheckedCreateInput>
    /**
     * In case the TradeNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradeNoteUpdateInput, TradeNoteUncheckedUpdateInput>
  }

  /**
   * TradeNote delete
   */
  export type TradeNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeNote
     */
    select?: TradeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeNote
     */
    omit?: TradeNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeNoteInclude<ExtArgs> | null
    /**
     * Filter which TradeNote to delete.
     */
    where: TradeNoteWhereUniqueInput
  }

  /**
   * TradeNote deleteMany
   */
  export type TradeNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TradeNotes to delete
     */
    where?: TradeNoteWhereInput
    /**
     * Limit how many TradeNotes to delete.
     */
    limit?: number
  }

  /**
   * TradeNote.trade
   */
  export type TradeNote$tradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    where?: TradeWhereInput
  }

  /**
   * TradeNote without action
   */
  export type TradeNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeNote
     */
    select?: TradeNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradeNote
     */
    omit?: TradeNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeNoteInclude<ExtArgs> | null
  }


  /**
   * Model AccountSummary
   */

  export type AggregateAccountSummary = {
    _count: AccountSummaryCountAggregateOutputType | null
    _avg: AccountSummaryAvgAggregateOutputType | null
    _sum: AccountSummarySumAggregateOutputType | null
    _min: AccountSummaryMinAggregateOutputType | null
    _max: AccountSummaryMaxAggregateOutputType | null
  }

  export type AccountSummaryAvgAggregateOutputType = {
    id: number | null
    closedPnL: number | null
    balance: number | null
    equity: number | null
    previousBalance: number | null
    previousEquity: number | null
    totalCreditFacility: number | null
    floatingPnL: number | null
    marginRequirements: number | null
    availableMargin: number | null
  }

  export type AccountSummarySumAggregateOutputType = {
    id: number | null
    closedPnL: number | null
    balance: number | null
    equity: number | null
    previousBalance: number | null
    previousEquity: number | null
    totalCreditFacility: number | null
    floatingPnL: number | null
    marginRequirements: number | null
    availableMargin: number | null
  }

  export type AccountSummaryMinAggregateOutputType = {
    id: number | null
    tradingAccountId: string | null
    date: string | null
    currency: string | null
    closedPnL: number | null
    balance: number | null
    equity: number | null
    previousBalance: number | null
    previousEquity: number | null
    totalCreditFacility: number | null
    floatingPnL: number | null
    marginRequirements: number | null
    availableMargin: number | null
    createdAt: Date | null
  }

  export type AccountSummaryMaxAggregateOutputType = {
    id: number | null
    tradingAccountId: string | null
    date: string | null
    currency: string | null
    closedPnL: number | null
    balance: number | null
    equity: number | null
    previousBalance: number | null
    previousEquity: number | null
    totalCreditFacility: number | null
    floatingPnL: number | null
    marginRequirements: number | null
    availableMargin: number | null
    createdAt: Date | null
  }

  export type AccountSummaryCountAggregateOutputType = {
    id: number
    tradingAccountId: number
    date: number
    currency: number
    closedPnL: number
    balance: number
    equity: number
    previousBalance: number
    previousEquity: number
    totalCreditFacility: number
    floatingPnL: number
    marginRequirements: number
    availableMargin: number
    createdAt: number
    _all: number
  }


  export type AccountSummaryAvgAggregateInputType = {
    id?: true
    closedPnL?: true
    balance?: true
    equity?: true
    previousBalance?: true
    previousEquity?: true
    totalCreditFacility?: true
    floatingPnL?: true
    marginRequirements?: true
    availableMargin?: true
  }

  export type AccountSummarySumAggregateInputType = {
    id?: true
    closedPnL?: true
    balance?: true
    equity?: true
    previousBalance?: true
    previousEquity?: true
    totalCreditFacility?: true
    floatingPnL?: true
    marginRequirements?: true
    availableMargin?: true
  }

  export type AccountSummaryMinAggregateInputType = {
    id?: true
    tradingAccountId?: true
    date?: true
    currency?: true
    closedPnL?: true
    balance?: true
    equity?: true
    previousBalance?: true
    previousEquity?: true
    totalCreditFacility?: true
    floatingPnL?: true
    marginRequirements?: true
    availableMargin?: true
    createdAt?: true
  }

  export type AccountSummaryMaxAggregateInputType = {
    id?: true
    tradingAccountId?: true
    date?: true
    currency?: true
    closedPnL?: true
    balance?: true
    equity?: true
    previousBalance?: true
    previousEquity?: true
    totalCreditFacility?: true
    floatingPnL?: true
    marginRequirements?: true
    availableMargin?: true
    createdAt?: true
  }

  export type AccountSummaryCountAggregateInputType = {
    id?: true
    tradingAccountId?: true
    date?: true
    currency?: true
    closedPnL?: true
    balance?: true
    equity?: true
    previousBalance?: true
    previousEquity?: true
    totalCreditFacility?: true
    floatingPnL?: true
    marginRequirements?: true
    availableMargin?: true
    createdAt?: true
    _all?: true
  }

  export type AccountSummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountSummary to aggregate.
     */
    where?: AccountSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountSummaries to fetch.
     */
    orderBy?: AccountSummaryOrderByWithRelationInput | AccountSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountSummaries
    **/
    _count?: true | AccountSummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountSummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountSummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountSummaryMaxAggregateInputType
  }

  export type GetAccountSummaryAggregateType<T extends AccountSummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountSummary[P]>
      : GetScalarType<T[P], AggregateAccountSummary[P]>
  }




  export type AccountSummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountSummaryWhereInput
    orderBy?: AccountSummaryOrderByWithAggregationInput | AccountSummaryOrderByWithAggregationInput[]
    by: AccountSummaryScalarFieldEnum[] | AccountSummaryScalarFieldEnum
    having?: AccountSummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountSummaryCountAggregateInputType | true
    _avg?: AccountSummaryAvgAggregateInputType
    _sum?: AccountSummarySumAggregateInputType
    _min?: AccountSummaryMinAggregateInputType
    _max?: AccountSummaryMaxAggregateInputType
  }

  export type AccountSummaryGroupByOutputType = {
    id: number
    tradingAccountId: string
    date: string
    currency: string
    closedPnL: number
    balance: number
    equity: number
    previousBalance: number
    previousEquity: number
    totalCreditFacility: number
    floatingPnL: number
    marginRequirements: number
    availableMargin: number
    createdAt: Date
    _count: AccountSummaryCountAggregateOutputType | null
    _avg: AccountSummaryAvgAggregateOutputType | null
    _sum: AccountSummarySumAggregateOutputType | null
    _min: AccountSummaryMinAggregateOutputType | null
    _max: AccountSummaryMaxAggregateOutputType | null
  }

  type GetAccountSummaryGroupByPayload<T extends AccountSummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountSummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountSummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountSummaryGroupByOutputType[P]>
            : GetScalarType<T[P], AccountSummaryGroupByOutputType[P]>
        }
      >
    >


  export type AccountSummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradingAccountId?: boolean
    date?: boolean
    currency?: boolean
    closedPnL?: boolean
    balance?: boolean
    equity?: boolean
    previousBalance?: boolean
    previousEquity?: boolean
    totalCreditFacility?: boolean
    floatingPnL?: boolean
    marginRequirements?: boolean
    availableMargin?: boolean
    createdAt?: boolean
    tradingAccount?: boolean | TradingAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountSummary"]>

  export type AccountSummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradingAccountId?: boolean
    date?: boolean
    currency?: boolean
    closedPnL?: boolean
    balance?: boolean
    equity?: boolean
    previousBalance?: boolean
    previousEquity?: boolean
    totalCreditFacility?: boolean
    floatingPnL?: boolean
    marginRequirements?: boolean
    availableMargin?: boolean
    createdAt?: boolean
    tradingAccount?: boolean | TradingAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountSummary"]>

  export type AccountSummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradingAccountId?: boolean
    date?: boolean
    currency?: boolean
    closedPnL?: boolean
    balance?: boolean
    equity?: boolean
    previousBalance?: boolean
    previousEquity?: boolean
    totalCreditFacility?: boolean
    floatingPnL?: boolean
    marginRequirements?: boolean
    availableMargin?: boolean
    createdAt?: boolean
    tradingAccount?: boolean | TradingAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountSummary"]>

  export type AccountSummarySelectScalar = {
    id?: boolean
    tradingAccountId?: boolean
    date?: boolean
    currency?: boolean
    closedPnL?: boolean
    balance?: boolean
    equity?: boolean
    previousBalance?: boolean
    previousEquity?: boolean
    totalCreditFacility?: boolean
    floatingPnL?: boolean
    marginRequirements?: boolean
    availableMargin?: boolean
    createdAt?: boolean
  }

  export type AccountSummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tradingAccountId" | "date" | "currency" | "closedPnL" | "balance" | "equity" | "previousBalance" | "previousEquity" | "totalCreditFacility" | "floatingPnL" | "marginRequirements" | "availableMargin" | "createdAt", ExtArgs["result"]["accountSummary"]>
  export type AccountSummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tradingAccount?: boolean | TradingAccountDefaultArgs<ExtArgs>
  }
  export type AccountSummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tradingAccount?: boolean | TradingAccountDefaultArgs<ExtArgs>
  }
  export type AccountSummaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tradingAccount?: boolean | TradingAccountDefaultArgs<ExtArgs>
  }

  export type $AccountSummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountSummary"
    objects: {
      tradingAccount: Prisma.$TradingAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tradingAccountId: string
      date: string
      currency: string
      closedPnL: number
      balance: number
      equity: number
      previousBalance: number
      previousEquity: number
      totalCreditFacility: number
      floatingPnL: number
      marginRequirements: number
      availableMargin: number
      createdAt: Date
    }, ExtArgs["result"]["accountSummary"]>
    composites: {}
  }

  type AccountSummaryGetPayload<S extends boolean | null | undefined | AccountSummaryDefaultArgs> = $Result.GetResult<Prisma.$AccountSummaryPayload, S>

  type AccountSummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountSummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountSummaryCountAggregateInputType | true
    }

  export interface AccountSummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountSummary'], meta: { name: 'AccountSummary' } }
    /**
     * Find zero or one AccountSummary that matches the filter.
     * @param {AccountSummaryFindUniqueArgs} args - Arguments to find a AccountSummary
     * @example
     * // Get one AccountSummary
     * const accountSummary = await prisma.accountSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountSummaryFindUniqueArgs>(args: SelectSubset<T, AccountSummaryFindUniqueArgs<ExtArgs>>): Prisma__AccountSummaryClient<$Result.GetResult<Prisma.$AccountSummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccountSummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountSummaryFindUniqueOrThrowArgs} args - Arguments to find a AccountSummary
     * @example
     * // Get one AccountSummary
     * const accountSummary = await prisma.accountSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountSummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountSummaryClient<$Result.GetResult<Prisma.$AccountSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSummaryFindFirstArgs} args - Arguments to find a AccountSummary
     * @example
     * // Get one AccountSummary
     * const accountSummary = await prisma.accountSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountSummaryFindFirstArgs>(args?: SelectSubset<T, AccountSummaryFindFirstArgs<ExtArgs>>): Prisma__AccountSummaryClient<$Result.GetResult<Prisma.$AccountSummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSummaryFindFirstOrThrowArgs} args - Arguments to find a AccountSummary
     * @example
     * // Get one AccountSummary
     * const accountSummary = await prisma.accountSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountSummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountSummaryClient<$Result.GetResult<Prisma.$AccountSummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccountSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountSummaries
     * const accountSummaries = await prisma.accountSummary.findMany()
     * 
     * // Get first 10 AccountSummaries
     * const accountSummaries = await prisma.accountSummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountSummaryWithIdOnly = await prisma.accountSummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountSummaryFindManyArgs>(args?: SelectSubset<T, AccountSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccountSummary.
     * @param {AccountSummaryCreateArgs} args - Arguments to create a AccountSummary.
     * @example
     * // Create one AccountSummary
     * const AccountSummary = await prisma.accountSummary.create({
     *   data: {
     *     // ... data to create a AccountSummary
     *   }
     * })
     * 
     */
    create<T extends AccountSummaryCreateArgs>(args: SelectSubset<T, AccountSummaryCreateArgs<ExtArgs>>): Prisma__AccountSummaryClient<$Result.GetResult<Prisma.$AccountSummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccountSummaries.
     * @param {AccountSummaryCreateManyArgs} args - Arguments to create many AccountSummaries.
     * @example
     * // Create many AccountSummaries
     * const accountSummary = await prisma.accountSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountSummaryCreateManyArgs>(args?: SelectSubset<T, AccountSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountSummaries and returns the data saved in the database.
     * @param {AccountSummaryCreateManyAndReturnArgs} args - Arguments to create many AccountSummaries.
     * @example
     * // Create many AccountSummaries
     * const accountSummary = await prisma.accountSummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountSummaries and only return the `id`
     * const accountSummaryWithIdOnly = await prisma.accountSummary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountSummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountSummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountSummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccountSummary.
     * @param {AccountSummaryDeleteArgs} args - Arguments to delete one AccountSummary.
     * @example
     * // Delete one AccountSummary
     * const AccountSummary = await prisma.accountSummary.delete({
     *   where: {
     *     // ... filter to delete one AccountSummary
     *   }
     * })
     * 
     */
    delete<T extends AccountSummaryDeleteArgs>(args: SelectSubset<T, AccountSummaryDeleteArgs<ExtArgs>>): Prisma__AccountSummaryClient<$Result.GetResult<Prisma.$AccountSummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccountSummary.
     * @param {AccountSummaryUpdateArgs} args - Arguments to update one AccountSummary.
     * @example
     * // Update one AccountSummary
     * const accountSummary = await prisma.accountSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountSummaryUpdateArgs>(args: SelectSubset<T, AccountSummaryUpdateArgs<ExtArgs>>): Prisma__AccountSummaryClient<$Result.GetResult<Prisma.$AccountSummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccountSummaries.
     * @param {AccountSummaryDeleteManyArgs} args - Arguments to filter AccountSummaries to delete.
     * @example
     * // Delete a few AccountSummaries
     * const { count } = await prisma.accountSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountSummaryDeleteManyArgs>(args?: SelectSubset<T, AccountSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountSummaries
     * const accountSummary = await prisma.accountSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountSummaryUpdateManyArgs>(args: SelectSubset<T, AccountSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountSummaries and returns the data updated in the database.
     * @param {AccountSummaryUpdateManyAndReturnArgs} args - Arguments to update many AccountSummaries.
     * @example
     * // Update many AccountSummaries
     * const accountSummary = await prisma.accountSummary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccountSummaries and only return the `id`
     * const accountSummaryWithIdOnly = await prisma.accountSummary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountSummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountSummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountSummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccountSummary.
     * @param {AccountSummaryUpsertArgs} args - Arguments to update or create a AccountSummary.
     * @example
     * // Update or create a AccountSummary
     * const accountSummary = await prisma.accountSummary.upsert({
     *   create: {
     *     // ... data to create a AccountSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountSummary we want to update
     *   }
     * })
     */
    upsert<T extends AccountSummaryUpsertArgs>(args: SelectSubset<T, AccountSummaryUpsertArgs<ExtArgs>>): Prisma__AccountSummaryClient<$Result.GetResult<Prisma.$AccountSummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccountSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSummaryCountArgs} args - Arguments to filter AccountSummaries to count.
     * @example
     * // Count the number of AccountSummaries
     * const count = await prisma.accountSummary.count({
     *   where: {
     *     // ... the filter for the AccountSummaries we want to count
     *   }
     * })
    **/
    count<T extends AccountSummaryCountArgs>(
      args?: Subset<T, AccountSummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountSummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountSummaryAggregateArgs>(args: Subset<T, AccountSummaryAggregateArgs>): Prisma.PrismaPromise<GetAccountSummaryAggregateType<T>>

    /**
     * Group by AccountSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSummaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountSummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountSummaryGroupByArgs['orderBy'] }
        : { orderBy?: AccountSummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountSummary model
   */
  readonly fields: AccountSummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountSummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountSummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tradingAccount<T extends TradingAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TradingAccountDefaultArgs<ExtArgs>>): Prisma__TradingAccountClient<$Result.GetResult<Prisma.$TradingAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccountSummary model
   */
  interface AccountSummaryFieldRefs {
    readonly id: FieldRef<"AccountSummary", 'Int'>
    readonly tradingAccountId: FieldRef<"AccountSummary", 'String'>
    readonly date: FieldRef<"AccountSummary", 'String'>
    readonly currency: FieldRef<"AccountSummary", 'String'>
    readonly closedPnL: FieldRef<"AccountSummary", 'Float'>
    readonly balance: FieldRef<"AccountSummary", 'Float'>
    readonly equity: FieldRef<"AccountSummary", 'Float'>
    readonly previousBalance: FieldRef<"AccountSummary", 'Float'>
    readonly previousEquity: FieldRef<"AccountSummary", 'Float'>
    readonly totalCreditFacility: FieldRef<"AccountSummary", 'Float'>
    readonly floatingPnL: FieldRef<"AccountSummary", 'Float'>
    readonly marginRequirements: FieldRef<"AccountSummary", 'Float'>
    readonly availableMargin: FieldRef<"AccountSummary", 'Float'>
    readonly createdAt: FieldRef<"AccountSummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountSummary findUnique
   */
  export type AccountSummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSummary
     */
    select?: AccountSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSummary
     */
    omit?: AccountSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSummaryInclude<ExtArgs> | null
    /**
     * Filter, which AccountSummary to fetch.
     */
    where: AccountSummaryWhereUniqueInput
  }

  /**
   * AccountSummary findUniqueOrThrow
   */
  export type AccountSummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSummary
     */
    select?: AccountSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSummary
     */
    omit?: AccountSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSummaryInclude<ExtArgs> | null
    /**
     * Filter, which AccountSummary to fetch.
     */
    where: AccountSummaryWhereUniqueInput
  }

  /**
   * AccountSummary findFirst
   */
  export type AccountSummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSummary
     */
    select?: AccountSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSummary
     */
    omit?: AccountSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSummaryInclude<ExtArgs> | null
    /**
     * Filter, which AccountSummary to fetch.
     */
    where?: AccountSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountSummaries to fetch.
     */
    orderBy?: AccountSummaryOrderByWithRelationInput | AccountSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountSummaries.
     */
    cursor?: AccountSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountSummaries.
     */
    distinct?: AccountSummaryScalarFieldEnum | AccountSummaryScalarFieldEnum[]
  }

  /**
   * AccountSummary findFirstOrThrow
   */
  export type AccountSummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSummary
     */
    select?: AccountSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSummary
     */
    omit?: AccountSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSummaryInclude<ExtArgs> | null
    /**
     * Filter, which AccountSummary to fetch.
     */
    where?: AccountSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountSummaries to fetch.
     */
    orderBy?: AccountSummaryOrderByWithRelationInput | AccountSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountSummaries.
     */
    cursor?: AccountSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountSummaries.
     */
    distinct?: AccountSummaryScalarFieldEnum | AccountSummaryScalarFieldEnum[]
  }

  /**
   * AccountSummary findMany
   */
  export type AccountSummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSummary
     */
    select?: AccountSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSummary
     */
    omit?: AccountSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSummaryInclude<ExtArgs> | null
    /**
     * Filter, which AccountSummaries to fetch.
     */
    where?: AccountSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountSummaries to fetch.
     */
    orderBy?: AccountSummaryOrderByWithRelationInput | AccountSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountSummaries.
     */
    cursor?: AccountSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountSummaries.
     */
    skip?: number
    distinct?: AccountSummaryScalarFieldEnum | AccountSummaryScalarFieldEnum[]
  }

  /**
   * AccountSummary create
   */
  export type AccountSummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSummary
     */
    select?: AccountSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSummary
     */
    omit?: AccountSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountSummary.
     */
    data: XOR<AccountSummaryCreateInput, AccountSummaryUncheckedCreateInput>
  }

  /**
   * AccountSummary createMany
   */
  export type AccountSummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountSummaries.
     */
    data: AccountSummaryCreateManyInput | AccountSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountSummary createManyAndReturn
   */
  export type AccountSummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSummary
     */
    select?: AccountSummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSummary
     */
    omit?: AccountSummaryOmit<ExtArgs> | null
    /**
     * The data used to create many AccountSummaries.
     */
    data: AccountSummaryCreateManyInput | AccountSummaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSummaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountSummary update
   */
  export type AccountSummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSummary
     */
    select?: AccountSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSummary
     */
    omit?: AccountSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountSummary.
     */
    data: XOR<AccountSummaryUpdateInput, AccountSummaryUncheckedUpdateInput>
    /**
     * Choose, which AccountSummary to update.
     */
    where: AccountSummaryWhereUniqueInput
  }

  /**
   * AccountSummary updateMany
   */
  export type AccountSummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountSummaries.
     */
    data: XOR<AccountSummaryUpdateManyMutationInput, AccountSummaryUncheckedUpdateManyInput>
    /**
     * Filter which AccountSummaries to update
     */
    where?: AccountSummaryWhereInput
    /**
     * Limit how many AccountSummaries to update.
     */
    limit?: number
  }

  /**
   * AccountSummary updateManyAndReturn
   */
  export type AccountSummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSummary
     */
    select?: AccountSummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSummary
     */
    omit?: AccountSummaryOmit<ExtArgs> | null
    /**
     * The data used to update AccountSummaries.
     */
    data: XOR<AccountSummaryUpdateManyMutationInput, AccountSummaryUncheckedUpdateManyInput>
    /**
     * Filter which AccountSummaries to update
     */
    where?: AccountSummaryWhereInput
    /**
     * Limit how many AccountSummaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSummaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountSummary upsert
   */
  export type AccountSummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSummary
     */
    select?: AccountSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSummary
     */
    omit?: AccountSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountSummary to update in case it exists.
     */
    where: AccountSummaryWhereUniqueInput
    /**
     * In case the AccountSummary found by the `where` argument doesn't exist, create a new AccountSummary with this data.
     */
    create: XOR<AccountSummaryCreateInput, AccountSummaryUncheckedCreateInput>
    /**
     * In case the AccountSummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountSummaryUpdateInput, AccountSummaryUncheckedUpdateInput>
  }

  /**
   * AccountSummary delete
   */
  export type AccountSummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSummary
     */
    select?: AccountSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSummary
     */
    omit?: AccountSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSummaryInclude<ExtArgs> | null
    /**
     * Filter which AccountSummary to delete.
     */
    where: AccountSummaryWhereUniqueInput
  }

  /**
   * AccountSummary deleteMany
   */
  export type AccountSummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountSummaries to delete
     */
    where?: AccountSummaryWhereInput
    /**
     * Limit how many AccountSummaries to delete.
     */
    limit?: number
  }

  /**
   * AccountSummary without action
   */
  export type AccountSummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountSummary
     */
    select?: AccountSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountSummary
     */
    omit?: AccountSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountSummaryInclude<ExtArgs> | null
  }


  /**
   * Model SystemSettings
   */

  export type AggregateSystemSettings = {
    _count: SystemSettingsCountAggregateOutputType | null
    _min: SystemSettingsMinAggregateOutputType | null
    _max: SystemSettingsMaxAggregateOutputType | null
  }

  export type SystemSettingsMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    type: $Enums.SettingType | null
    description: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemSettingsMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    type: $Enums.SettingType | null
    description: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemSettingsCountAggregateOutputType = {
    id: number
    key: number
    value: number
    type: number
    description: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SystemSettingsMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    type?: true
    description?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemSettingsMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    type?: true
    description?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemSettingsCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    type?: true
    description?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to aggregate.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemSettings
    **/
    _count?: true | SystemSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemSettingsMaxAggregateInputType
  }

  export type GetSystemSettingsAggregateType<T extends SystemSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemSettings[P]>
      : GetScalarType<T[P], AggregateSystemSettings[P]>
  }




  export type SystemSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemSettingsWhereInput
    orderBy?: SystemSettingsOrderByWithAggregationInput | SystemSettingsOrderByWithAggregationInput[]
    by: SystemSettingsScalarFieldEnum[] | SystemSettingsScalarFieldEnum
    having?: SystemSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemSettingsCountAggregateInputType | true
    _min?: SystemSettingsMinAggregateInputType
    _max?: SystemSettingsMaxAggregateInputType
  }

  export type SystemSettingsGroupByOutputType = {
    id: string
    key: string
    value: string
    type: $Enums.SettingType
    description: string | null
    category: string | null
    createdAt: Date
    updatedAt: Date
    _count: SystemSettingsCountAggregateOutputType | null
    _min: SystemSettingsMinAggregateOutputType | null
    _max: SystemSettingsMaxAggregateOutputType | null
  }

  type GetSystemSettingsGroupByPayload<T extends SystemSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SystemSettingsGroupByOutputType[P]>
        }
      >
    >


  export type SystemSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    type?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    type?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    type?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemSettings"]>

  export type SystemSettingsSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    type?: boolean
    description?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SystemSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "type" | "description" | "category" | "createdAt" | "updatedAt", ExtArgs["result"]["systemSettings"]>

  export type $SystemSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      type: $Enums.SettingType
      description: string | null
      category: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["systemSettings"]>
    composites: {}
  }

  type SystemSettingsGetPayload<S extends boolean | null | undefined | SystemSettingsDefaultArgs> = $Result.GetResult<Prisma.$SystemSettingsPayload, S>

  type SystemSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemSettingsCountAggregateInputType | true
    }

  export interface SystemSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemSettings'], meta: { name: 'SystemSettings' } }
    /**
     * Find zero or one SystemSettings that matches the filter.
     * @param {SystemSettingsFindUniqueArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemSettingsFindUniqueArgs>(args: SelectSubset<T, SystemSettingsFindUniqueArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemSettingsFindUniqueOrThrowArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindFirstArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemSettingsFindFirstArgs>(args?: SelectSubset<T, SystemSettingsFindFirstArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindFirstOrThrowArgs} args - Arguments to find a SystemSettings
     * @example
     * // Get one SystemSettings
     * const systemSettings = await prisma.systemSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemSettings
     * const systemSettings = await prisma.systemSettings.findMany()
     * 
     * // Get first 10 SystemSettings
     * const systemSettings = await prisma.systemSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemSettingsFindManyArgs>(args?: SelectSubset<T, SystemSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemSettings.
     * @param {SystemSettingsCreateArgs} args - Arguments to create a SystemSettings.
     * @example
     * // Create one SystemSettings
     * const SystemSettings = await prisma.systemSettings.create({
     *   data: {
     *     // ... data to create a SystemSettings
     *   }
     * })
     * 
     */
    create<T extends SystemSettingsCreateArgs>(args: SelectSubset<T, SystemSettingsCreateArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemSettings.
     * @param {SystemSettingsCreateManyArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSettings = await prisma.systemSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemSettingsCreateManyArgs>(args?: SelectSubset<T, SystemSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemSettings and returns the data saved in the database.
     * @param {SystemSettingsCreateManyAndReturnArgs} args - Arguments to create many SystemSettings.
     * @example
     * // Create many SystemSettings
     * const systemSettings = await prisma.systemSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemSettings and only return the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemSettings.
     * @param {SystemSettingsDeleteArgs} args - Arguments to delete one SystemSettings.
     * @example
     * // Delete one SystemSettings
     * const SystemSettings = await prisma.systemSettings.delete({
     *   where: {
     *     // ... filter to delete one SystemSettings
     *   }
     * })
     * 
     */
    delete<T extends SystemSettingsDeleteArgs>(args: SelectSubset<T, SystemSettingsDeleteArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemSettings.
     * @param {SystemSettingsUpdateArgs} args - Arguments to update one SystemSettings.
     * @example
     * // Update one SystemSettings
     * const systemSettings = await prisma.systemSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemSettingsUpdateArgs>(args: SelectSubset<T, SystemSettingsUpdateArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemSettings.
     * @param {SystemSettingsDeleteManyArgs} args - Arguments to filter SystemSettings to delete.
     * @example
     * // Delete a few SystemSettings
     * const { count } = await prisma.systemSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemSettingsDeleteManyArgs>(args?: SelectSubset<T, SystemSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemSettings
     * const systemSettings = await prisma.systemSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemSettingsUpdateManyArgs>(args: SelectSubset<T, SystemSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemSettings and returns the data updated in the database.
     * @param {SystemSettingsUpdateManyAndReturnArgs} args - Arguments to update many SystemSettings.
     * @example
     * // Update many SystemSettings
     * const systemSettings = await prisma.systemSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemSettings and only return the `id`
     * const systemSettingsWithIdOnly = await prisma.systemSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemSettings.
     * @param {SystemSettingsUpsertArgs} args - Arguments to update or create a SystemSettings.
     * @example
     * // Update or create a SystemSettings
     * const systemSettings = await prisma.systemSettings.upsert({
     *   create: {
     *     // ... data to create a SystemSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemSettings we want to update
     *   }
     * })
     */
    upsert<T extends SystemSettingsUpsertArgs>(args: SelectSubset<T, SystemSettingsUpsertArgs<ExtArgs>>): Prisma__SystemSettingsClient<$Result.GetResult<Prisma.$SystemSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsCountArgs} args - Arguments to filter SystemSettings to count.
     * @example
     * // Count the number of SystemSettings
     * const count = await prisma.systemSettings.count({
     *   where: {
     *     // ... the filter for the SystemSettings we want to count
     *   }
     * })
    **/
    count<T extends SystemSettingsCountArgs>(
      args?: Subset<T, SystemSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemSettingsAggregateArgs>(args: Subset<T, SystemSettingsAggregateArgs>): Prisma.PrismaPromise<GetSystemSettingsAggregateType<T>>

    /**
     * Group by SystemSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemSettingsGroupByArgs['orderBy'] }
        : { orderBy?: SystemSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemSettings model
   */
  readonly fields: SystemSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemSettings model
   */
  interface SystemSettingsFieldRefs {
    readonly id: FieldRef<"SystemSettings", 'String'>
    readonly key: FieldRef<"SystemSettings", 'String'>
    readonly value: FieldRef<"SystemSettings", 'String'>
    readonly type: FieldRef<"SystemSettings", 'SettingType'>
    readonly description: FieldRef<"SystemSettings", 'String'>
    readonly category: FieldRef<"SystemSettings", 'String'>
    readonly createdAt: FieldRef<"SystemSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemSettings findUnique
   */
  export type SystemSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings findUniqueOrThrow
   */
  export type SystemSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings findFirst
   */
  export type SystemSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings findFirstOrThrow
   */
  export type SystemSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemSettings.
     */
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings findMany
   */
  export type SystemSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter, which SystemSettings to fetch.
     */
    where?: SystemSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemSettings to fetch.
     */
    orderBy?: SystemSettingsOrderByWithRelationInput | SystemSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemSettings.
     */
    cursor?: SystemSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemSettings.
     */
    skip?: number
    distinct?: SystemSettingsScalarFieldEnum | SystemSettingsScalarFieldEnum[]
  }

  /**
   * SystemSettings create
   */
  export type SystemSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemSettings.
     */
    data: XOR<SystemSettingsCreateInput, SystemSettingsUncheckedCreateInput>
  }

  /**
   * SystemSettings createMany
   */
  export type SystemSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingsCreateManyInput | SystemSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSettings createManyAndReturn
   */
  export type SystemSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many SystemSettings.
     */
    data: SystemSettingsCreateManyInput | SystemSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemSettings update
   */
  export type SystemSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemSettings.
     */
    data: XOR<SystemSettingsUpdateInput, SystemSettingsUncheckedUpdateInput>
    /**
     * Choose, which SystemSettings to update.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings updateMany
   */
  export type SystemSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingsUpdateManyMutationInput, SystemSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSettings updateManyAndReturn
   */
  export type SystemSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The data used to update SystemSettings.
     */
    data: XOR<SystemSettingsUpdateManyMutationInput, SystemSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SystemSettings to update
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to update.
     */
    limit?: number
  }

  /**
   * SystemSettings upsert
   */
  export type SystemSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemSettings to update in case it exists.
     */
    where: SystemSettingsWhereUniqueInput
    /**
     * In case the SystemSettings found by the `where` argument doesn't exist, create a new SystemSettings with this data.
     */
    create: XOR<SystemSettingsCreateInput, SystemSettingsUncheckedCreateInput>
    /**
     * In case the SystemSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemSettingsUpdateInput, SystemSettingsUncheckedUpdateInput>
  }

  /**
   * SystemSettings delete
   */
  export type SystemSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
    /**
     * Filter which SystemSettings to delete.
     */
    where: SystemSettingsWhereUniqueInput
  }

  /**
   * SystemSettings deleteMany
   */
  export type SystemSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemSettings to delete
     */
    where?: SystemSettingsWhereInput
    /**
     * Limit how many SystemSettings to delete.
     */
    limit?: number
  }

  /**
   * SystemSettings without action
   */
  export type SystemSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemSettings
     */
    select?: SystemSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemSettings
     */
    omit?: SystemSettingsOmit<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    entity: number
    entityId: number
    oldData: number
    newData: number
    ipAddress: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    oldData?: true
    newData?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    userId: string | null
    action: string
    entity: string
    entityId: string | null
    oldData: JsonValue | null
    newData: JsonValue | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    oldData?: boolean
    newData?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    oldData?: boolean
    newData?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    oldData?: boolean
    newData?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    oldData?: boolean
    newData?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "entity" | "entityId" | "oldData" | "newData" | "ipAddress" | "userAgent" | "createdAt", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      action: string
      entity: string
      entityId: string | null
      oldData: Prisma.JsonValue | null
      newData: Prisma.JsonValue | null
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly oldData: FieldRef<"AuditLog", 'Json'>
    readonly newData: FieldRef<"AuditLog", 'Json'>
    readonly ipAddress: FieldRef<"AuditLog", 'String'>
    readonly userAgent: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    status: 'status',
    emailVerified: 'emailVerified',
    image: 'image',
    registeredAt: 'registeredAt',
    approvedAt: 'approvedAt',
    approvedBy: 'approvedBy',
    rejectedAt: 'rejectedAt',
    rejectionReason: 'rejectionReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const TradingAccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    accountNumber: 'accountNumber',
    brokerName: 'brokerName',
    currency: 'currency',
    isActive: 'isActive',
    isDefault: 'isDefault',
    color: 'color',
    icon: 'icon',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TradingAccountScalarFieldEnum = (typeof TradingAccountScalarFieldEnum)[keyof typeof TradingAccountScalarFieldEnum]


  export const TradeScalarFieldEnum: {
    id: 'id',
    tradingAccountId: 'tradingAccountId',
    openTime: 'openTime',
    ticket: 'ticket',
    type: 'type',
    size: 'size',
    instrument: 'instrument',
    price: 'price',
    exitPrice: 'exitPrice',
    orderId: 'orderId',
    comment: 'comment',
    entry: 'entry',
    commission: 'commission',
    fee: 'fee',
    swap: 'swap',
    profit: 'profit',
    notes: 'notes',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TradeScalarFieldEnum = (typeof TradeScalarFieldEnum)[keyof typeof TradeScalarFieldEnum]


  export const TradeNoteScalarFieldEnum: {
    id: 'id',
    tradeId: 'tradeId',
    userId: 'userId',
    title: 'title',
    content: 'content',
    convictionBefore: 'convictionBefore',
    emotionAfter: 'emotionAfter',
    category: 'category',
    tags: 'tags',
    isPrivate: 'isPrivate',
    isPinned: 'isPinned',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TradeNoteScalarFieldEnum = (typeof TradeNoteScalarFieldEnum)[keyof typeof TradeNoteScalarFieldEnum]


  export const AccountSummaryScalarFieldEnum: {
    id: 'id',
    tradingAccountId: 'tradingAccountId',
    date: 'date',
    currency: 'currency',
    closedPnL: 'closedPnL',
    balance: 'balance',
    equity: 'equity',
    previousBalance: 'previousBalance',
    previousEquity: 'previousEquity',
    totalCreditFacility: 'totalCreditFacility',
    floatingPnL: 'floatingPnL',
    marginRequirements: 'marginRequirements',
    availableMargin: 'availableMargin',
    createdAt: 'createdAt'
  };

  export type AccountSummaryScalarFieldEnum = (typeof AccountSummaryScalarFieldEnum)[keyof typeof AccountSummaryScalarFieldEnum]


  export const SystemSettingsScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    type: 'type',
    description: 'description',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SystemSettingsScalarFieldEnum = (typeof SystemSettingsScalarFieldEnum)[keyof typeof SystemSettingsScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    oldData: 'oldData',
    newData: 'newData',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TradeType'
   */
  export type EnumTradeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TradeType'>
    


  /**
   * Reference to a field of type 'TradeType[]'
   */
  export type ListEnumTradeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TradeType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TradeEntry'
   */
  export type EnumTradeEntryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TradeEntry'>
    


  /**
   * Reference to a field of type 'TradeEntry[]'
   */
  export type ListEnumTradeEntryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TradeEntry[]'>
    


  /**
   * Reference to a field of type 'SettingType'
   */
  export type EnumSettingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SettingType'>
    


  /**
   * Reference to a field of type 'SettingType[]'
   */
  export type ListEnumSettingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SettingType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    registeredAt?: DateTimeFilter<"User"> | Date | string
    approvedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    approvedBy?: StringNullableFilter<"User"> | string | null
    rejectedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    rejectionReason?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    tradingAccounts?: TradingAccountListRelationFilter
    tradeNotes?: TradeNoteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    registeredAt?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    rejectedAt?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    tradingAccounts?: TradingAccountOrderByRelationAggregateInput
    tradeNotes?: TradeNoteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    registeredAt?: DateTimeFilter<"User"> | Date | string
    approvedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    approvedBy?: StringNullableFilter<"User"> | string | null
    rejectedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    rejectionReason?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    tradingAccounts?: TradingAccountListRelationFilter
    tradeNotes?: TradeNoteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    registeredAt?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    rejectedAt?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    registeredAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    approvedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    approvedBy?: StringNullableWithAggregatesFilter<"User"> | string | null
    rejectedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    rejectionReason?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type TradingAccountWhereInput = {
    AND?: TradingAccountWhereInput | TradingAccountWhereInput[]
    OR?: TradingAccountWhereInput[]
    NOT?: TradingAccountWhereInput | TradingAccountWhereInput[]
    id?: StringFilter<"TradingAccount"> | string
    userId?: StringFilter<"TradingAccount"> | string
    name?: StringFilter<"TradingAccount"> | string
    description?: StringNullableFilter<"TradingAccount"> | string | null
    accountNumber?: StringFilter<"TradingAccount"> | string
    brokerName?: StringNullableFilter<"TradingAccount"> | string | null
    currency?: StringFilter<"TradingAccount"> | string
    isActive?: BoolFilter<"TradingAccount"> | boolean
    isDefault?: BoolFilter<"TradingAccount"> | boolean
    color?: StringNullableFilter<"TradingAccount"> | string | null
    icon?: StringNullableFilter<"TradingAccount"> | string | null
    createdAt?: DateTimeFilter<"TradingAccount"> | Date | string
    updatedAt?: DateTimeFilter<"TradingAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trades?: TradeListRelationFilter
    accountSummaries?: AccountSummaryListRelationFilter
  }

  export type TradingAccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    accountNumber?: SortOrder
    brokerName?: SortOrderInput | SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    color?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    trades?: TradeOrderByRelationAggregateInput
    accountSummaries?: AccountSummaryOrderByRelationAggregateInput
  }

  export type TradingAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_accountNumber?: TradingAccountUserIdAccountNumberCompoundUniqueInput
    AND?: TradingAccountWhereInput | TradingAccountWhereInput[]
    OR?: TradingAccountWhereInput[]
    NOT?: TradingAccountWhereInput | TradingAccountWhereInput[]
    userId?: StringFilter<"TradingAccount"> | string
    name?: StringFilter<"TradingAccount"> | string
    description?: StringNullableFilter<"TradingAccount"> | string | null
    accountNumber?: StringFilter<"TradingAccount"> | string
    brokerName?: StringNullableFilter<"TradingAccount"> | string | null
    currency?: StringFilter<"TradingAccount"> | string
    isActive?: BoolFilter<"TradingAccount"> | boolean
    isDefault?: BoolFilter<"TradingAccount"> | boolean
    color?: StringNullableFilter<"TradingAccount"> | string | null
    icon?: StringNullableFilter<"TradingAccount"> | string | null
    createdAt?: DateTimeFilter<"TradingAccount"> | Date | string
    updatedAt?: DateTimeFilter<"TradingAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    trades?: TradeListRelationFilter
    accountSummaries?: AccountSummaryListRelationFilter
  }, "id" | "userId_accountNumber">

  export type TradingAccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    accountNumber?: SortOrder
    brokerName?: SortOrderInput | SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    color?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TradingAccountCountOrderByAggregateInput
    _max?: TradingAccountMaxOrderByAggregateInput
    _min?: TradingAccountMinOrderByAggregateInput
  }

  export type TradingAccountScalarWhereWithAggregatesInput = {
    AND?: TradingAccountScalarWhereWithAggregatesInput | TradingAccountScalarWhereWithAggregatesInput[]
    OR?: TradingAccountScalarWhereWithAggregatesInput[]
    NOT?: TradingAccountScalarWhereWithAggregatesInput | TradingAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TradingAccount"> | string
    userId?: StringWithAggregatesFilter<"TradingAccount"> | string
    name?: StringWithAggregatesFilter<"TradingAccount"> | string
    description?: StringNullableWithAggregatesFilter<"TradingAccount"> | string | null
    accountNumber?: StringWithAggregatesFilter<"TradingAccount"> | string
    brokerName?: StringNullableWithAggregatesFilter<"TradingAccount"> | string | null
    currency?: StringWithAggregatesFilter<"TradingAccount"> | string
    isActive?: BoolWithAggregatesFilter<"TradingAccount"> | boolean
    isDefault?: BoolWithAggregatesFilter<"TradingAccount"> | boolean
    color?: StringNullableWithAggregatesFilter<"TradingAccount"> | string | null
    icon?: StringNullableWithAggregatesFilter<"TradingAccount"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TradingAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TradingAccount"> | Date | string
  }

  export type TradeWhereInput = {
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    id?: StringFilter<"Trade"> | string
    tradingAccountId?: StringFilter<"Trade"> | string
    openTime?: StringFilter<"Trade"> | string
    ticket?: StringFilter<"Trade"> | string
    type?: EnumTradeTypeFilter<"Trade"> | $Enums.TradeType
    size?: FloatFilter<"Trade"> | number
    instrument?: StringFilter<"Trade"> | string
    price?: FloatFilter<"Trade"> | number
    exitPrice?: FloatNullableFilter<"Trade"> | number | null
    orderId?: StringNullableFilter<"Trade"> | string | null
    comment?: StringNullableFilter<"Trade"> | string | null
    entry?: EnumTradeEntryFilter<"Trade"> | $Enums.TradeEntry
    commission?: FloatFilter<"Trade"> | number
    fee?: FloatFilter<"Trade"> | number
    swap?: FloatFilter<"Trade"> | number
    profit?: FloatFilter<"Trade"> | number
    notes?: StringNullableFilter<"Trade"> | string | null
    tags?: StringNullableFilter<"Trade"> | string | null
    createdAt?: DateTimeFilter<"Trade"> | Date | string
    updatedAt?: DateTimeFilter<"Trade"> | Date | string
    tradingAccount?: XOR<TradingAccountScalarRelationFilter, TradingAccountWhereInput>
    tradeNotes?: TradeNoteListRelationFilter
  }

  export type TradeOrderByWithRelationInput = {
    id?: SortOrder
    tradingAccountId?: SortOrder
    openTime?: SortOrder
    ticket?: SortOrder
    type?: SortOrder
    size?: SortOrder
    instrument?: SortOrder
    price?: SortOrder
    exitPrice?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    entry?: SortOrder
    commission?: SortOrder
    fee?: SortOrder
    swap?: SortOrder
    profit?: SortOrder
    notes?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tradingAccount?: TradingAccountOrderByWithRelationInput
    tradeNotes?: TradeNoteOrderByRelationAggregateInput
  }

  export type TradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    tradingAccountId?: StringFilter<"Trade"> | string
    openTime?: StringFilter<"Trade"> | string
    ticket?: StringFilter<"Trade"> | string
    type?: EnumTradeTypeFilter<"Trade"> | $Enums.TradeType
    size?: FloatFilter<"Trade"> | number
    instrument?: StringFilter<"Trade"> | string
    price?: FloatFilter<"Trade"> | number
    exitPrice?: FloatNullableFilter<"Trade"> | number | null
    orderId?: StringNullableFilter<"Trade"> | string | null
    comment?: StringNullableFilter<"Trade"> | string | null
    entry?: EnumTradeEntryFilter<"Trade"> | $Enums.TradeEntry
    commission?: FloatFilter<"Trade"> | number
    fee?: FloatFilter<"Trade"> | number
    swap?: FloatFilter<"Trade"> | number
    profit?: FloatFilter<"Trade"> | number
    notes?: StringNullableFilter<"Trade"> | string | null
    tags?: StringNullableFilter<"Trade"> | string | null
    createdAt?: DateTimeFilter<"Trade"> | Date | string
    updatedAt?: DateTimeFilter<"Trade"> | Date | string
    tradingAccount?: XOR<TradingAccountScalarRelationFilter, TradingAccountWhereInput>
    tradeNotes?: TradeNoteListRelationFilter
  }, "id">

  export type TradeOrderByWithAggregationInput = {
    id?: SortOrder
    tradingAccountId?: SortOrder
    openTime?: SortOrder
    ticket?: SortOrder
    type?: SortOrder
    size?: SortOrder
    instrument?: SortOrder
    price?: SortOrder
    exitPrice?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    entry?: SortOrder
    commission?: SortOrder
    fee?: SortOrder
    swap?: SortOrder
    profit?: SortOrder
    notes?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TradeCountOrderByAggregateInput
    _avg?: TradeAvgOrderByAggregateInput
    _max?: TradeMaxOrderByAggregateInput
    _min?: TradeMinOrderByAggregateInput
    _sum?: TradeSumOrderByAggregateInput
  }

  export type TradeScalarWhereWithAggregatesInput = {
    AND?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    OR?: TradeScalarWhereWithAggregatesInput[]
    NOT?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trade"> | string
    tradingAccountId?: StringWithAggregatesFilter<"Trade"> | string
    openTime?: StringWithAggregatesFilter<"Trade"> | string
    ticket?: StringWithAggregatesFilter<"Trade"> | string
    type?: EnumTradeTypeWithAggregatesFilter<"Trade"> | $Enums.TradeType
    size?: FloatWithAggregatesFilter<"Trade"> | number
    instrument?: StringWithAggregatesFilter<"Trade"> | string
    price?: FloatWithAggregatesFilter<"Trade"> | number
    exitPrice?: FloatNullableWithAggregatesFilter<"Trade"> | number | null
    orderId?: StringNullableWithAggregatesFilter<"Trade"> | string | null
    comment?: StringNullableWithAggregatesFilter<"Trade"> | string | null
    entry?: EnumTradeEntryWithAggregatesFilter<"Trade"> | $Enums.TradeEntry
    commission?: FloatWithAggregatesFilter<"Trade"> | number
    fee?: FloatWithAggregatesFilter<"Trade"> | number
    swap?: FloatWithAggregatesFilter<"Trade"> | number
    profit?: FloatWithAggregatesFilter<"Trade"> | number
    notes?: StringNullableWithAggregatesFilter<"Trade"> | string | null
    tags?: StringNullableWithAggregatesFilter<"Trade"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Trade"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trade"> | Date | string
  }

  export type TradeNoteWhereInput = {
    AND?: TradeNoteWhereInput | TradeNoteWhereInput[]
    OR?: TradeNoteWhereInput[]
    NOT?: TradeNoteWhereInput | TradeNoteWhereInput[]
    id?: StringFilter<"TradeNote"> | string
    tradeId?: StringNullableFilter<"TradeNote"> | string | null
    userId?: StringFilter<"TradeNote"> | string
    title?: StringFilter<"TradeNote"> | string
    content?: StringFilter<"TradeNote"> | string
    convictionBefore?: IntNullableFilter<"TradeNote"> | number | null
    emotionAfter?: IntNullableFilter<"TradeNote"> | number | null
    category?: StringNullableFilter<"TradeNote"> | string | null
    tags?: StringNullableFilter<"TradeNote"> | string | null
    isPrivate?: BoolFilter<"TradeNote"> | boolean
    isPinned?: BoolFilter<"TradeNote"> | boolean
    createdAt?: DateTimeFilter<"TradeNote"> | Date | string
    updatedAt?: DateTimeFilter<"TradeNote"> | Date | string
    trade?: XOR<TradeNullableScalarRelationFilter, TradeWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TradeNoteOrderByWithRelationInput = {
    id?: SortOrder
    tradeId?: SortOrderInput | SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    convictionBefore?: SortOrderInput | SortOrder
    emotionAfter?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    isPrivate?: SortOrder
    isPinned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trade?: TradeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TradeNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TradeNoteWhereInput | TradeNoteWhereInput[]
    OR?: TradeNoteWhereInput[]
    NOT?: TradeNoteWhereInput | TradeNoteWhereInput[]
    tradeId?: StringNullableFilter<"TradeNote"> | string | null
    userId?: StringFilter<"TradeNote"> | string
    title?: StringFilter<"TradeNote"> | string
    content?: StringFilter<"TradeNote"> | string
    convictionBefore?: IntNullableFilter<"TradeNote"> | number | null
    emotionAfter?: IntNullableFilter<"TradeNote"> | number | null
    category?: StringNullableFilter<"TradeNote"> | string | null
    tags?: StringNullableFilter<"TradeNote"> | string | null
    isPrivate?: BoolFilter<"TradeNote"> | boolean
    isPinned?: BoolFilter<"TradeNote"> | boolean
    createdAt?: DateTimeFilter<"TradeNote"> | Date | string
    updatedAt?: DateTimeFilter<"TradeNote"> | Date | string
    trade?: XOR<TradeNullableScalarRelationFilter, TradeWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TradeNoteOrderByWithAggregationInput = {
    id?: SortOrder
    tradeId?: SortOrderInput | SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    convictionBefore?: SortOrderInput | SortOrder
    emotionAfter?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    isPrivate?: SortOrder
    isPinned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TradeNoteCountOrderByAggregateInput
    _avg?: TradeNoteAvgOrderByAggregateInput
    _max?: TradeNoteMaxOrderByAggregateInput
    _min?: TradeNoteMinOrderByAggregateInput
    _sum?: TradeNoteSumOrderByAggregateInput
  }

  export type TradeNoteScalarWhereWithAggregatesInput = {
    AND?: TradeNoteScalarWhereWithAggregatesInput | TradeNoteScalarWhereWithAggregatesInput[]
    OR?: TradeNoteScalarWhereWithAggregatesInput[]
    NOT?: TradeNoteScalarWhereWithAggregatesInput | TradeNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TradeNote"> | string
    tradeId?: StringNullableWithAggregatesFilter<"TradeNote"> | string | null
    userId?: StringWithAggregatesFilter<"TradeNote"> | string
    title?: StringWithAggregatesFilter<"TradeNote"> | string
    content?: StringWithAggregatesFilter<"TradeNote"> | string
    convictionBefore?: IntNullableWithAggregatesFilter<"TradeNote"> | number | null
    emotionAfter?: IntNullableWithAggregatesFilter<"TradeNote"> | number | null
    category?: StringNullableWithAggregatesFilter<"TradeNote"> | string | null
    tags?: StringNullableWithAggregatesFilter<"TradeNote"> | string | null
    isPrivate?: BoolWithAggregatesFilter<"TradeNote"> | boolean
    isPinned?: BoolWithAggregatesFilter<"TradeNote"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TradeNote"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TradeNote"> | Date | string
  }

  export type AccountSummaryWhereInput = {
    AND?: AccountSummaryWhereInput | AccountSummaryWhereInput[]
    OR?: AccountSummaryWhereInput[]
    NOT?: AccountSummaryWhereInput | AccountSummaryWhereInput[]
    id?: IntFilter<"AccountSummary"> | number
    tradingAccountId?: StringFilter<"AccountSummary"> | string
    date?: StringFilter<"AccountSummary"> | string
    currency?: StringFilter<"AccountSummary"> | string
    closedPnL?: FloatFilter<"AccountSummary"> | number
    balance?: FloatFilter<"AccountSummary"> | number
    equity?: FloatFilter<"AccountSummary"> | number
    previousBalance?: FloatFilter<"AccountSummary"> | number
    previousEquity?: FloatFilter<"AccountSummary"> | number
    totalCreditFacility?: FloatFilter<"AccountSummary"> | number
    floatingPnL?: FloatFilter<"AccountSummary"> | number
    marginRequirements?: FloatFilter<"AccountSummary"> | number
    availableMargin?: FloatFilter<"AccountSummary"> | number
    createdAt?: DateTimeFilter<"AccountSummary"> | Date | string
    tradingAccount?: XOR<TradingAccountScalarRelationFilter, TradingAccountWhereInput>
  }

  export type AccountSummaryOrderByWithRelationInput = {
    id?: SortOrder
    tradingAccountId?: SortOrder
    date?: SortOrder
    currency?: SortOrder
    closedPnL?: SortOrder
    balance?: SortOrder
    equity?: SortOrder
    previousBalance?: SortOrder
    previousEquity?: SortOrder
    totalCreditFacility?: SortOrder
    floatingPnL?: SortOrder
    marginRequirements?: SortOrder
    availableMargin?: SortOrder
    createdAt?: SortOrder
    tradingAccount?: TradingAccountOrderByWithRelationInput
  }

  export type AccountSummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AccountSummaryWhereInput | AccountSummaryWhereInput[]
    OR?: AccountSummaryWhereInput[]
    NOT?: AccountSummaryWhereInput | AccountSummaryWhereInput[]
    tradingAccountId?: StringFilter<"AccountSummary"> | string
    date?: StringFilter<"AccountSummary"> | string
    currency?: StringFilter<"AccountSummary"> | string
    closedPnL?: FloatFilter<"AccountSummary"> | number
    balance?: FloatFilter<"AccountSummary"> | number
    equity?: FloatFilter<"AccountSummary"> | number
    previousBalance?: FloatFilter<"AccountSummary"> | number
    previousEquity?: FloatFilter<"AccountSummary"> | number
    totalCreditFacility?: FloatFilter<"AccountSummary"> | number
    floatingPnL?: FloatFilter<"AccountSummary"> | number
    marginRequirements?: FloatFilter<"AccountSummary"> | number
    availableMargin?: FloatFilter<"AccountSummary"> | number
    createdAt?: DateTimeFilter<"AccountSummary"> | Date | string
    tradingAccount?: XOR<TradingAccountScalarRelationFilter, TradingAccountWhereInput>
  }, "id">

  export type AccountSummaryOrderByWithAggregationInput = {
    id?: SortOrder
    tradingAccountId?: SortOrder
    date?: SortOrder
    currency?: SortOrder
    closedPnL?: SortOrder
    balance?: SortOrder
    equity?: SortOrder
    previousBalance?: SortOrder
    previousEquity?: SortOrder
    totalCreditFacility?: SortOrder
    floatingPnL?: SortOrder
    marginRequirements?: SortOrder
    availableMargin?: SortOrder
    createdAt?: SortOrder
    _count?: AccountSummaryCountOrderByAggregateInput
    _avg?: AccountSummaryAvgOrderByAggregateInput
    _max?: AccountSummaryMaxOrderByAggregateInput
    _min?: AccountSummaryMinOrderByAggregateInput
    _sum?: AccountSummarySumOrderByAggregateInput
  }

  export type AccountSummaryScalarWhereWithAggregatesInput = {
    AND?: AccountSummaryScalarWhereWithAggregatesInput | AccountSummaryScalarWhereWithAggregatesInput[]
    OR?: AccountSummaryScalarWhereWithAggregatesInput[]
    NOT?: AccountSummaryScalarWhereWithAggregatesInput | AccountSummaryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AccountSummary"> | number
    tradingAccountId?: StringWithAggregatesFilter<"AccountSummary"> | string
    date?: StringWithAggregatesFilter<"AccountSummary"> | string
    currency?: StringWithAggregatesFilter<"AccountSummary"> | string
    closedPnL?: FloatWithAggregatesFilter<"AccountSummary"> | number
    balance?: FloatWithAggregatesFilter<"AccountSummary"> | number
    equity?: FloatWithAggregatesFilter<"AccountSummary"> | number
    previousBalance?: FloatWithAggregatesFilter<"AccountSummary"> | number
    previousEquity?: FloatWithAggregatesFilter<"AccountSummary"> | number
    totalCreditFacility?: FloatWithAggregatesFilter<"AccountSummary"> | number
    floatingPnL?: FloatWithAggregatesFilter<"AccountSummary"> | number
    marginRequirements?: FloatWithAggregatesFilter<"AccountSummary"> | number
    availableMargin?: FloatWithAggregatesFilter<"AccountSummary"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AccountSummary"> | Date | string
  }

  export type SystemSettingsWhereInput = {
    AND?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    OR?: SystemSettingsWhereInput[]
    NOT?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    id?: StringFilter<"SystemSettings"> | string
    key?: StringFilter<"SystemSettings"> | string
    value?: StringFilter<"SystemSettings"> | string
    type?: EnumSettingTypeFilter<"SystemSettings"> | $Enums.SettingType
    description?: StringNullableFilter<"SystemSettings"> | string | null
    category?: StringNullableFilter<"SystemSettings"> | string | null
    createdAt?: DateTimeFilter<"SystemSettings"> | Date | string
    updatedAt?: DateTimeFilter<"SystemSettings"> | Date | string
  }

  export type SystemSettingsOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    OR?: SystemSettingsWhereInput[]
    NOT?: SystemSettingsWhereInput | SystemSettingsWhereInput[]
    value?: StringFilter<"SystemSettings"> | string
    type?: EnumSettingTypeFilter<"SystemSettings"> | $Enums.SettingType
    description?: StringNullableFilter<"SystemSettings"> | string | null
    category?: StringNullableFilter<"SystemSettings"> | string | null
    createdAt?: DateTimeFilter<"SystemSettings"> | Date | string
    updatedAt?: DateTimeFilter<"SystemSettings"> | Date | string
  }, "id" | "key">

  export type SystemSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemSettingsCountOrderByAggregateInput
    _max?: SystemSettingsMaxOrderByAggregateInput
    _min?: SystemSettingsMinOrderByAggregateInput
  }

  export type SystemSettingsScalarWhereWithAggregatesInput = {
    AND?: SystemSettingsScalarWhereWithAggregatesInput | SystemSettingsScalarWhereWithAggregatesInput[]
    OR?: SystemSettingsScalarWhereWithAggregatesInput[]
    NOT?: SystemSettingsScalarWhereWithAggregatesInput | SystemSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemSettings"> | string
    key?: StringWithAggregatesFilter<"SystemSettings"> | string
    value?: StringWithAggregatesFilter<"SystemSettings"> | string
    type?: EnumSettingTypeWithAggregatesFilter<"SystemSettings"> | $Enums.SettingType
    description?: StringNullableWithAggregatesFilter<"SystemSettings"> | string | null
    category?: StringNullableWithAggregatesFilter<"SystemSettings"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SystemSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemSettings"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    oldData?: JsonNullableFilter<"AuditLog">
    newData?: JsonNullableFilter<"AuditLog">
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    oldData?: SortOrderInput | SortOrder
    newData?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    oldData?: JsonNullableFilter<"AuditLog">
    newData?: JsonNullableFilter<"AuditLog">
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    oldData?: SortOrderInput | SortOrder
    newData?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entity?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    oldData?: JsonNullableWithAggregatesFilter<"AuditLog">
    newData?: JsonNullableWithAggregatesFilter<"AuditLog">
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    emailVerified?: Date | string | null
    image?: string | null
    registeredAt?: Date | string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectedAt?: Date | string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    tradingAccounts?: TradingAccountCreateNestedManyWithoutUserInput
    tradeNotes?: TradeNoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    emailVerified?: Date | string | null
    image?: string | null
    registeredAt?: Date | string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectedAt?: Date | string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tradingAccounts?: TradingAccountUncheckedCreateNestedManyWithoutUserInput
    tradeNotes?: TradeNoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tradingAccounts?: TradingAccountUpdateManyWithoutUserNestedInput
    tradeNotes?: TradeNoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tradingAccounts?: TradingAccountUncheckedUpdateManyWithoutUserNestedInput
    tradeNotes?: TradeNoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    emailVerified?: Date | string | null
    image?: string | null
    registeredAt?: Date | string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectedAt?: Date | string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradingAccountCreateInput = {
    id?: string
    name: string
    description?: string | null
    accountNumber: string
    brokerName?: string | null
    currency?: string
    isActive?: boolean
    isDefault?: boolean
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTradingAccountsInput
    trades?: TradeCreateNestedManyWithoutTradingAccountInput
    accountSummaries?: AccountSummaryCreateNestedManyWithoutTradingAccountInput
  }

  export type TradingAccountUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    accountNumber: string
    brokerName?: string | null
    currency?: string
    isActive?: boolean
    isDefault?: boolean
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trades?: TradeUncheckedCreateNestedManyWithoutTradingAccountInput
    accountSummaries?: AccountSummaryUncheckedCreateNestedManyWithoutTradingAccountInput
  }

  export type TradingAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: StringFieldUpdateOperationsInput | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTradingAccountsNestedInput
    trades?: TradeUpdateManyWithoutTradingAccountNestedInput
    accountSummaries?: AccountSummaryUpdateManyWithoutTradingAccountNestedInput
  }

  export type TradingAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: StringFieldUpdateOperationsInput | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trades?: TradeUncheckedUpdateManyWithoutTradingAccountNestedInput
    accountSummaries?: AccountSummaryUncheckedUpdateManyWithoutTradingAccountNestedInput
  }

  export type TradingAccountCreateManyInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    accountNumber: string
    brokerName?: string | null
    currency?: string
    isActive?: boolean
    isDefault?: boolean
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TradingAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: StringFieldUpdateOperationsInput | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradingAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: StringFieldUpdateOperationsInput | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeCreateInput = {
    id?: string
    openTime: string
    ticket: string
    type: $Enums.TradeType
    size: number
    instrument: string
    price: number
    exitPrice?: number | null
    orderId?: string | null
    comment?: string | null
    entry: $Enums.TradeEntry
    commission?: number
    fee?: number
    swap?: number
    profit?: number
    notes?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tradingAccount: TradingAccountCreateNestedOneWithoutTradesInput
    tradeNotes?: TradeNoteCreateNestedManyWithoutTradeInput
  }

  export type TradeUncheckedCreateInput = {
    id?: string
    tradingAccountId: string
    openTime: string
    ticket: string
    type: $Enums.TradeType
    size: number
    instrument: string
    price: number
    exitPrice?: number | null
    orderId?: string | null
    comment?: string | null
    entry: $Enums.TradeEntry
    commission?: number
    fee?: number
    swap?: number
    profit?: number
    notes?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tradeNotes?: TradeNoteUncheckedCreateNestedManyWithoutTradeInput
  }

  export type TradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    ticket?: StringFieldUpdateOperationsInput | string
    type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    size?: FloatFieldUpdateOperationsInput | number
    instrument?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    exitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    entry?: EnumTradeEntryFieldUpdateOperationsInput | $Enums.TradeEntry
    commission?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    swap?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tradingAccount?: TradingAccountUpdateOneRequiredWithoutTradesNestedInput
    tradeNotes?: TradeNoteUpdateManyWithoutTradeNestedInput
  }

  export type TradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradingAccountId?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    ticket?: StringFieldUpdateOperationsInput | string
    type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    size?: FloatFieldUpdateOperationsInput | number
    instrument?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    exitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    entry?: EnumTradeEntryFieldUpdateOperationsInput | $Enums.TradeEntry
    commission?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    swap?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tradeNotes?: TradeNoteUncheckedUpdateManyWithoutTradeNestedInput
  }

  export type TradeCreateManyInput = {
    id?: string
    tradingAccountId: string
    openTime: string
    ticket: string
    type: $Enums.TradeType
    size: number
    instrument: string
    price: number
    exitPrice?: number | null
    orderId?: string | null
    comment?: string | null
    entry: $Enums.TradeEntry
    commission?: number
    fee?: number
    swap?: number
    profit?: number
    notes?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    ticket?: StringFieldUpdateOperationsInput | string
    type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    size?: FloatFieldUpdateOperationsInput | number
    instrument?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    exitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    entry?: EnumTradeEntryFieldUpdateOperationsInput | $Enums.TradeEntry
    commission?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    swap?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradingAccountId?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    ticket?: StringFieldUpdateOperationsInput | string
    type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    size?: FloatFieldUpdateOperationsInput | number
    instrument?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    exitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    entry?: EnumTradeEntryFieldUpdateOperationsInput | $Enums.TradeEntry
    commission?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    swap?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeNoteCreateInput = {
    id?: string
    title: string
    content: string
    convictionBefore?: number | null
    emotionAfter?: number | null
    category?: string | null
    tags?: string | null
    isPrivate?: boolean
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trade?: TradeCreateNestedOneWithoutTradeNotesInput
    user: UserCreateNestedOneWithoutTradeNotesInput
  }

  export type TradeNoteUncheckedCreateInput = {
    id?: string
    tradeId?: string | null
    userId: string
    title: string
    content: string
    convictionBefore?: number | null
    emotionAfter?: number | null
    category?: string | null
    tags?: string | null
    isPrivate?: boolean
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TradeNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    convictionBefore?: NullableIntFieldUpdateOperationsInput | number | null
    emotionAfter?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trade?: TradeUpdateOneWithoutTradeNotesNestedInput
    user?: UserUpdateOneRequiredWithoutTradeNotesNestedInput
  }

  export type TradeNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    convictionBefore?: NullableIntFieldUpdateOperationsInput | number | null
    emotionAfter?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeNoteCreateManyInput = {
    id?: string
    tradeId?: string | null
    userId: string
    title: string
    content: string
    convictionBefore?: number | null
    emotionAfter?: number | null
    category?: string | null
    tags?: string | null
    isPrivate?: boolean
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TradeNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    convictionBefore?: NullableIntFieldUpdateOperationsInput | number | null
    emotionAfter?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    convictionBefore?: NullableIntFieldUpdateOperationsInput | number | null
    emotionAfter?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountSummaryCreateInput = {
    date: string
    currency?: string
    closedPnL: number
    balance: number
    equity: number
    previousBalance?: number
    previousEquity?: number
    totalCreditFacility?: number
    floatingPnL?: number
    marginRequirements?: number
    availableMargin?: number
    createdAt?: Date | string
    tradingAccount: TradingAccountCreateNestedOneWithoutAccountSummariesInput
  }

  export type AccountSummaryUncheckedCreateInput = {
    id?: number
    tradingAccountId: string
    date: string
    currency?: string
    closedPnL: number
    balance: number
    equity: number
    previousBalance?: number
    previousEquity?: number
    totalCreditFacility?: number
    floatingPnL?: number
    marginRequirements?: number
    availableMargin?: number
    createdAt?: Date | string
  }

  export type AccountSummaryUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    closedPnL?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    equity?: FloatFieldUpdateOperationsInput | number
    previousBalance?: FloatFieldUpdateOperationsInput | number
    previousEquity?: FloatFieldUpdateOperationsInput | number
    totalCreditFacility?: FloatFieldUpdateOperationsInput | number
    floatingPnL?: FloatFieldUpdateOperationsInput | number
    marginRequirements?: FloatFieldUpdateOperationsInput | number
    availableMargin?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tradingAccount?: TradingAccountUpdateOneRequiredWithoutAccountSummariesNestedInput
  }

  export type AccountSummaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tradingAccountId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    closedPnL?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    equity?: FloatFieldUpdateOperationsInput | number
    previousBalance?: FloatFieldUpdateOperationsInput | number
    previousEquity?: FloatFieldUpdateOperationsInput | number
    totalCreditFacility?: FloatFieldUpdateOperationsInput | number
    floatingPnL?: FloatFieldUpdateOperationsInput | number
    marginRequirements?: FloatFieldUpdateOperationsInput | number
    availableMargin?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountSummaryCreateManyInput = {
    id?: number
    tradingAccountId: string
    date: string
    currency?: string
    closedPnL: number
    balance: number
    equity: number
    previousBalance?: number
    previousEquity?: number
    totalCreditFacility?: number
    floatingPnL?: number
    marginRequirements?: number
    availableMargin?: number
    createdAt?: Date | string
  }

  export type AccountSummaryUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    closedPnL?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    equity?: FloatFieldUpdateOperationsInput | number
    previousBalance?: FloatFieldUpdateOperationsInput | number
    previousEquity?: FloatFieldUpdateOperationsInput | number
    totalCreditFacility?: FloatFieldUpdateOperationsInput | number
    floatingPnL?: FloatFieldUpdateOperationsInput | number
    marginRequirements?: FloatFieldUpdateOperationsInput | number
    availableMargin?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountSummaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tradingAccountId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    closedPnL?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    equity?: FloatFieldUpdateOperationsInput | number
    previousBalance?: FloatFieldUpdateOperationsInput | number
    previousEquity?: FloatFieldUpdateOperationsInput | number
    totalCreditFacility?: FloatFieldUpdateOperationsInput | number
    floatingPnL?: FloatFieldUpdateOperationsInput | number
    marginRequirements?: FloatFieldUpdateOperationsInput | number
    availableMargin?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsCreateInput = {
    id?: string
    key: string
    value: string
    type?: $Enums.SettingType
    description?: string | null
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemSettingsUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    type?: $Enums.SettingType
    description?: string | null
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: EnumSettingTypeFieldUpdateOperationsInput | $Enums.SettingType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: EnumSettingTypeFieldUpdateOperationsInput | $Enums.SettingType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsCreateManyInput = {
    id?: string
    key: string
    value: string
    type?: $Enums.SettingType
    description?: string | null
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: EnumSettingTypeFieldUpdateOperationsInput | $Enums.SettingType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    type?: EnumSettingTypeFieldUpdateOperationsInput | $Enums.SettingType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    userId?: string | null
    action: string
    entity: string
    entityId?: string | null
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newData?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    action: string
    entity: string
    entityId?: string | null
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newData?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newData?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newData?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    userId?: string | null
    action: string
    entity: string
    entityId?: string | null
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newData?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newData?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newData?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type TradingAccountListRelationFilter = {
    every?: TradingAccountWhereInput
    some?: TradingAccountWhereInput
    none?: TradingAccountWhereInput
  }

  export type TradeNoteListRelationFilter = {
    every?: TradeNoteWhereInput
    some?: TradeNoteWhereInput
    none?: TradeNoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TradingAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TradeNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    registeredAt?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    rejectedAt?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    registeredAt?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    rejectedAt?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    registeredAt?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    rejectedAt?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TradeListRelationFilter = {
    every?: TradeWhereInput
    some?: TradeWhereInput
    none?: TradeWhereInput
  }

  export type AccountSummaryListRelationFilter = {
    every?: AccountSummaryWhereInput
    some?: AccountSummaryWhereInput
    none?: AccountSummaryWhereInput
  }

  export type TradeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountSummaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TradingAccountUserIdAccountNumberCompoundUniqueInput = {
    userId: string
    accountNumber: string
  }

  export type TradingAccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    accountNumber?: SortOrder
    brokerName?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TradingAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    accountNumber?: SortOrder
    brokerName?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TradingAccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    accountNumber?: SortOrder
    brokerName?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTradeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeType | EnumTradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeTypeFilter<$PrismaModel> | $Enums.TradeType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumTradeEntryFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeEntry | EnumTradeEntryFieldRefInput<$PrismaModel>
    in?: $Enums.TradeEntry[] | ListEnumTradeEntryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeEntry[] | ListEnumTradeEntryFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeEntryFilter<$PrismaModel> | $Enums.TradeEntry
  }

  export type TradingAccountScalarRelationFilter = {
    is?: TradingAccountWhereInput
    isNot?: TradingAccountWhereInput
  }

  export type TradeCountOrderByAggregateInput = {
    id?: SortOrder
    tradingAccountId?: SortOrder
    openTime?: SortOrder
    ticket?: SortOrder
    type?: SortOrder
    size?: SortOrder
    instrument?: SortOrder
    price?: SortOrder
    exitPrice?: SortOrder
    orderId?: SortOrder
    comment?: SortOrder
    entry?: SortOrder
    commission?: SortOrder
    fee?: SortOrder
    swap?: SortOrder
    profit?: SortOrder
    notes?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TradeAvgOrderByAggregateInput = {
    size?: SortOrder
    price?: SortOrder
    exitPrice?: SortOrder
    commission?: SortOrder
    fee?: SortOrder
    swap?: SortOrder
    profit?: SortOrder
  }

  export type TradeMaxOrderByAggregateInput = {
    id?: SortOrder
    tradingAccountId?: SortOrder
    openTime?: SortOrder
    ticket?: SortOrder
    type?: SortOrder
    size?: SortOrder
    instrument?: SortOrder
    price?: SortOrder
    exitPrice?: SortOrder
    orderId?: SortOrder
    comment?: SortOrder
    entry?: SortOrder
    commission?: SortOrder
    fee?: SortOrder
    swap?: SortOrder
    profit?: SortOrder
    notes?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TradeMinOrderByAggregateInput = {
    id?: SortOrder
    tradingAccountId?: SortOrder
    openTime?: SortOrder
    ticket?: SortOrder
    type?: SortOrder
    size?: SortOrder
    instrument?: SortOrder
    price?: SortOrder
    exitPrice?: SortOrder
    orderId?: SortOrder
    comment?: SortOrder
    entry?: SortOrder
    commission?: SortOrder
    fee?: SortOrder
    swap?: SortOrder
    profit?: SortOrder
    notes?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TradeSumOrderByAggregateInput = {
    size?: SortOrder
    price?: SortOrder
    exitPrice?: SortOrder
    commission?: SortOrder
    fee?: SortOrder
    swap?: SortOrder
    profit?: SortOrder
  }

  export type EnumTradeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeType | EnumTradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeTypeWithAggregatesFilter<$PrismaModel> | $Enums.TradeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTradeTypeFilter<$PrismaModel>
    _max?: NestedEnumTradeTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumTradeEntryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeEntry | EnumTradeEntryFieldRefInput<$PrismaModel>
    in?: $Enums.TradeEntry[] | ListEnumTradeEntryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeEntry[] | ListEnumTradeEntryFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeEntryWithAggregatesFilter<$PrismaModel> | $Enums.TradeEntry
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTradeEntryFilter<$PrismaModel>
    _max?: NestedEnumTradeEntryFilter<$PrismaModel>
  }

  export type TradeNullableScalarRelationFilter = {
    is?: TradeWhereInput | null
    isNot?: TradeWhereInput | null
  }

  export type TradeNoteCountOrderByAggregateInput = {
    id?: SortOrder
    tradeId?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    convictionBefore?: SortOrder
    emotionAfter?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    isPrivate?: SortOrder
    isPinned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TradeNoteAvgOrderByAggregateInput = {
    convictionBefore?: SortOrder
    emotionAfter?: SortOrder
  }

  export type TradeNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    tradeId?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    convictionBefore?: SortOrder
    emotionAfter?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    isPrivate?: SortOrder
    isPinned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TradeNoteMinOrderByAggregateInput = {
    id?: SortOrder
    tradeId?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    convictionBefore?: SortOrder
    emotionAfter?: SortOrder
    category?: SortOrder
    tags?: SortOrder
    isPrivate?: SortOrder
    isPinned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TradeNoteSumOrderByAggregateInput = {
    convictionBefore?: SortOrder
    emotionAfter?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AccountSummaryCountOrderByAggregateInput = {
    id?: SortOrder
    tradingAccountId?: SortOrder
    date?: SortOrder
    currency?: SortOrder
    closedPnL?: SortOrder
    balance?: SortOrder
    equity?: SortOrder
    previousBalance?: SortOrder
    previousEquity?: SortOrder
    totalCreditFacility?: SortOrder
    floatingPnL?: SortOrder
    marginRequirements?: SortOrder
    availableMargin?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountSummaryAvgOrderByAggregateInput = {
    id?: SortOrder
    closedPnL?: SortOrder
    balance?: SortOrder
    equity?: SortOrder
    previousBalance?: SortOrder
    previousEquity?: SortOrder
    totalCreditFacility?: SortOrder
    floatingPnL?: SortOrder
    marginRequirements?: SortOrder
    availableMargin?: SortOrder
  }

  export type AccountSummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    tradingAccountId?: SortOrder
    date?: SortOrder
    currency?: SortOrder
    closedPnL?: SortOrder
    balance?: SortOrder
    equity?: SortOrder
    previousBalance?: SortOrder
    previousEquity?: SortOrder
    totalCreditFacility?: SortOrder
    floatingPnL?: SortOrder
    marginRequirements?: SortOrder
    availableMargin?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountSummaryMinOrderByAggregateInput = {
    id?: SortOrder
    tradingAccountId?: SortOrder
    date?: SortOrder
    currency?: SortOrder
    closedPnL?: SortOrder
    balance?: SortOrder
    equity?: SortOrder
    previousBalance?: SortOrder
    previousEquity?: SortOrder
    totalCreditFacility?: SortOrder
    floatingPnL?: SortOrder
    marginRequirements?: SortOrder
    availableMargin?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountSummarySumOrderByAggregateInput = {
    id?: SortOrder
    closedPnL?: SortOrder
    balance?: SortOrder
    equity?: SortOrder
    previousBalance?: SortOrder
    previousEquity?: SortOrder
    totalCreditFacility?: SortOrder
    floatingPnL?: SortOrder
    marginRequirements?: SortOrder
    availableMargin?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumSettingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SettingType | EnumSettingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SettingType[] | ListEnumSettingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SettingType[] | ListEnumSettingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSettingTypeFilter<$PrismaModel> | $Enums.SettingType
  }

  export type SystemSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    type?: SortOrder
    description?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSettingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SettingType | EnumSettingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SettingType[] | ListEnumSettingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SettingType[] | ListEnumSettingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSettingTypeWithAggregatesFilter<$PrismaModel> | $Enums.SettingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSettingTypeFilter<$PrismaModel>
    _max?: NestedEnumSettingTypeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    oldData?: SortOrder
    newData?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TradingAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<TradingAccountCreateWithoutUserInput, TradingAccountUncheckedCreateWithoutUserInput> | TradingAccountCreateWithoutUserInput[] | TradingAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TradingAccountCreateOrConnectWithoutUserInput | TradingAccountCreateOrConnectWithoutUserInput[]
    createMany?: TradingAccountCreateManyUserInputEnvelope
    connect?: TradingAccountWhereUniqueInput | TradingAccountWhereUniqueInput[]
  }

  export type TradeNoteCreateNestedManyWithoutUserInput = {
    create?: XOR<TradeNoteCreateWithoutUserInput, TradeNoteUncheckedCreateWithoutUserInput> | TradeNoteCreateWithoutUserInput[] | TradeNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TradeNoteCreateOrConnectWithoutUserInput | TradeNoteCreateOrConnectWithoutUserInput[]
    createMany?: TradeNoteCreateManyUserInputEnvelope
    connect?: TradeNoteWhereUniqueInput | TradeNoteWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TradingAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TradingAccountCreateWithoutUserInput, TradingAccountUncheckedCreateWithoutUserInput> | TradingAccountCreateWithoutUserInput[] | TradingAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TradingAccountCreateOrConnectWithoutUserInput | TradingAccountCreateOrConnectWithoutUserInput[]
    createMany?: TradingAccountCreateManyUserInputEnvelope
    connect?: TradingAccountWhereUniqueInput | TradingAccountWhereUniqueInput[]
  }

  export type TradeNoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TradeNoteCreateWithoutUserInput, TradeNoteUncheckedCreateWithoutUserInput> | TradeNoteCreateWithoutUserInput[] | TradeNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TradeNoteCreateOrConnectWithoutUserInput | TradeNoteCreateOrConnectWithoutUserInput[]
    createMany?: TradeNoteCreateManyUserInputEnvelope
    connect?: TradeNoteWhereUniqueInput | TradeNoteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TradingAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<TradingAccountCreateWithoutUserInput, TradingAccountUncheckedCreateWithoutUserInput> | TradingAccountCreateWithoutUserInput[] | TradingAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TradingAccountCreateOrConnectWithoutUserInput | TradingAccountCreateOrConnectWithoutUserInput[]
    upsert?: TradingAccountUpsertWithWhereUniqueWithoutUserInput | TradingAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TradingAccountCreateManyUserInputEnvelope
    set?: TradingAccountWhereUniqueInput | TradingAccountWhereUniqueInput[]
    disconnect?: TradingAccountWhereUniqueInput | TradingAccountWhereUniqueInput[]
    delete?: TradingAccountWhereUniqueInput | TradingAccountWhereUniqueInput[]
    connect?: TradingAccountWhereUniqueInput | TradingAccountWhereUniqueInput[]
    update?: TradingAccountUpdateWithWhereUniqueWithoutUserInput | TradingAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TradingAccountUpdateManyWithWhereWithoutUserInput | TradingAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TradingAccountScalarWhereInput | TradingAccountScalarWhereInput[]
  }

  export type TradeNoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<TradeNoteCreateWithoutUserInput, TradeNoteUncheckedCreateWithoutUserInput> | TradeNoteCreateWithoutUserInput[] | TradeNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TradeNoteCreateOrConnectWithoutUserInput | TradeNoteCreateOrConnectWithoutUserInput[]
    upsert?: TradeNoteUpsertWithWhereUniqueWithoutUserInput | TradeNoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TradeNoteCreateManyUserInputEnvelope
    set?: TradeNoteWhereUniqueInput | TradeNoteWhereUniqueInput[]
    disconnect?: TradeNoteWhereUniqueInput | TradeNoteWhereUniqueInput[]
    delete?: TradeNoteWhereUniqueInput | TradeNoteWhereUniqueInput[]
    connect?: TradeNoteWhereUniqueInput | TradeNoteWhereUniqueInput[]
    update?: TradeNoteUpdateWithWhereUniqueWithoutUserInput | TradeNoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TradeNoteUpdateManyWithWhereWithoutUserInput | TradeNoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TradeNoteScalarWhereInput | TradeNoteScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TradingAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TradingAccountCreateWithoutUserInput, TradingAccountUncheckedCreateWithoutUserInput> | TradingAccountCreateWithoutUserInput[] | TradingAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TradingAccountCreateOrConnectWithoutUserInput | TradingAccountCreateOrConnectWithoutUserInput[]
    upsert?: TradingAccountUpsertWithWhereUniqueWithoutUserInput | TradingAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TradingAccountCreateManyUserInputEnvelope
    set?: TradingAccountWhereUniqueInput | TradingAccountWhereUniqueInput[]
    disconnect?: TradingAccountWhereUniqueInput | TradingAccountWhereUniqueInput[]
    delete?: TradingAccountWhereUniqueInput | TradingAccountWhereUniqueInput[]
    connect?: TradingAccountWhereUniqueInput | TradingAccountWhereUniqueInput[]
    update?: TradingAccountUpdateWithWhereUniqueWithoutUserInput | TradingAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TradingAccountUpdateManyWithWhereWithoutUserInput | TradingAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TradingAccountScalarWhereInput | TradingAccountScalarWhereInput[]
  }

  export type TradeNoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TradeNoteCreateWithoutUserInput, TradeNoteUncheckedCreateWithoutUserInput> | TradeNoteCreateWithoutUserInput[] | TradeNoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TradeNoteCreateOrConnectWithoutUserInput | TradeNoteCreateOrConnectWithoutUserInput[]
    upsert?: TradeNoteUpsertWithWhereUniqueWithoutUserInput | TradeNoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TradeNoteCreateManyUserInputEnvelope
    set?: TradeNoteWhereUniqueInput | TradeNoteWhereUniqueInput[]
    disconnect?: TradeNoteWhereUniqueInput | TradeNoteWhereUniqueInput[]
    delete?: TradeNoteWhereUniqueInput | TradeNoteWhereUniqueInput[]
    connect?: TradeNoteWhereUniqueInput | TradeNoteWhereUniqueInput[]
    update?: TradeNoteUpdateWithWhereUniqueWithoutUserInput | TradeNoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TradeNoteUpdateManyWithWhereWithoutUserInput | TradeNoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TradeNoteScalarWhereInput | TradeNoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutTradingAccountsInput = {
    create?: XOR<UserCreateWithoutTradingAccountsInput, UserUncheckedCreateWithoutTradingAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTradingAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type TradeCreateNestedManyWithoutTradingAccountInput = {
    create?: XOR<TradeCreateWithoutTradingAccountInput, TradeUncheckedCreateWithoutTradingAccountInput> | TradeCreateWithoutTradingAccountInput[] | TradeUncheckedCreateWithoutTradingAccountInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutTradingAccountInput | TradeCreateOrConnectWithoutTradingAccountInput[]
    createMany?: TradeCreateManyTradingAccountInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type AccountSummaryCreateNestedManyWithoutTradingAccountInput = {
    create?: XOR<AccountSummaryCreateWithoutTradingAccountInput, AccountSummaryUncheckedCreateWithoutTradingAccountInput> | AccountSummaryCreateWithoutTradingAccountInput[] | AccountSummaryUncheckedCreateWithoutTradingAccountInput[]
    connectOrCreate?: AccountSummaryCreateOrConnectWithoutTradingAccountInput | AccountSummaryCreateOrConnectWithoutTradingAccountInput[]
    createMany?: AccountSummaryCreateManyTradingAccountInputEnvelope
    connect?: AccountSummaryWhereUniqueInput | AccountSummaryWhereUniqueInput[]
  }

  export type TradeUncheckedCreateNestedManyWithoutTradingAccountInput = {
    create?: XOR<TradeCreateWithoutTradingAccountInput, TradeUncheckedCreateWithoutTradingAccountInput> | TradeCreateWithoutTradingAccountInput[] | TradeUncheckedCreateWithoutTradingAccountInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutTradingAccountInput | TradeCreateOrConnectWithoutTradingAccountInput[]
    createMany?: TradeCreateManyTradingAccountInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type AccountSummaryUncheckedCreateNestedManyWithoutTradingAccountInput = {
    create?: XOR<AccountSummaryCreateWithoutTradingAccountInput, AccountSummaryUncheckedCreateWithoutTradingAccountInput> | AccountSummaryCreateWithoutTradingAccountInput[] | AccountSummaryUncheckedCreateWithoutTradingAccountInput[]
    connectOrCreate?: AccountSummaryCreateOrConnectWithoutTradingAccountInput | AccountSummaryCreateOrConnectWithoutTradingAccountInput[]
    createMany?: AccountSummaryCreateManyTradingAccountInputEnvelope
    connect?: AccountSummaryWhereUniqueInput | AccountSummaryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutTradingAccountsNestedInput = {
    create?: XOR<UserCreateWithoutTradingAccountsInput, UserUncheckedCreateWithoutTradingAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTradingAccountsInput
    upsert?: UserUpsertWithoutTradingAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTradingAccountsInput, UserUpdateWithoutTradingAccountsInput>, UserUncheckedUpdateWithoutTradingAccountsInput>
  }

  export type TradeUpdateManyWithoutTradingAccountNestedInput = {
    create?: XOR<TradeCreateWithoutTradingAccountInput, TradeUncheckedCreateWithoutTradingAccountInput> | TradeCreateWithoutTradingAccountInput[] | TradeUncheckedCreateWithoutTradingAccountInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutTradingAccountInput | TradeCreateOrConnectWithoutTradingAccountInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutTradingAccountInput | TradeUpsertWithWhereUniqueWithoutTradingAccountInput[]
    createMany?: TradeCreateManyTradingAccountInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutTradingAccountInput | TradeUpdateWithWhereUniqueWithoutTradingAccountInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutTradingAccountInput | TradeUpdateManyWithWhereWithoutTradingAccountInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type AccountSummaryUpdateManyWithoutTradingAccountNestedInput = {
    create?: XOR<AccountSummaryCreateWithoutTradingAccountInput, AccountSummaryUncheckedCreateWithoutTradingAccountInput> | AccountSummaryCreateWithoutTradingAccountInput[] | AccountSummaryUncheckedCreateWithoutTradingAccountInput[]
    connectOrCreate?: AccountSummaryCreateOrConnectWithoutTradingAccountInput | AccountSummaryCreateOrConnectWithoutTradingAccountInput[]
    upsert?: AccountSummaryUpsertWithWhereUniqueWithoutTradingAccountInput | AccountSummaryUpsertWithWhereUniqueWithoutTradingAccountInput[]
    createMany?: AccountSummaryCreateManyTradingAccountInputEnvelope
    set?: AccountSummaryWhereUniqueInput | AccountSummaryWhereUniqueInput[]
    disconnect?: AccountSummaryWhereUniqueInput | AccountSummaryWhereUniqueInput[]
    delete?: AccountSummaryWhereUniqueInput | AccountSummaryWhereUniqueInput[]
    connect?: AccountSummaryWhereUniqueInput | AccountSummaryWhereUniqueInput[]
    update?: AccountSummaryUpdateWithWhereUniqueWithoutTradingAccountInput | AccountSummaryUpdateWithWhereUniqueWithoutTradingAccountInput[]
    updateMany?: AccountSummaryUpdateManyWithWhereWithoutTradingAccountInput | AccountSummaryUpdateManyWithWhereWithoutTradingAccountInput[]
    deleteMany?: AccountSummaryScalarWhereInput | AccountSummaryScalarWhereInput[]
  }

  export type TradeUncheckedUpdateManyWithoutTradingAccountNestedInput = {
    create?: XOR<TradeCreateWithoutTradingAccountInput, TradeUncheckedCreateWithoutTradingAccountInput> | TradeCreateWithoutTradingAccountInput[] | TradeUncheckedCreateWithoutTradingAccountInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutTradingAccountInput | TradeCreateOrConnectWithoutTradingAccountInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutTradingAccountInput | TradeUpsertWithWhereUniqueWithoutTradingAccountInput[]
    createMany?: TradeCreateManyTradingAccountInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutTradingAccountInput | TradeUpdateWithWhereUniqueWithoutTradingAccountInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutTradingAccountInput | TradeUpdateManyWithWhereWithoutTradingAccountInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type AccountSummaryUncheckedUpdateManyWithoutTradingAccountNestedInput = {
    create?: XOR<AccountSummaryCreateWithoutTradingAccountInput, AccountSummaryUncheckedCreateWithoutTradingAccountInput> | AccountSummaryCreateWithoutTradingAccountInput[] | AccountSummaryUncheckedCreateWithoutTradingAccountInput[]
    connectOrCreate?: AccountSummaryCreateOrConnectWithoutTradingAccountInput | AccountSummaryCreateOrConnectWithoutTradingAccountInput[]
    upsert?: AccountSummaryUpsertWithWhereUniqueWithoutTradingAccountInput | AccountSummaryUpsertWithWhereUniqueWithoutTradingAccountInput[]
    createMany?: AccountSummaryCreateManyTradingAccountInputEnvelope
    set?: AccountSummaryWhereUniqueInput | AccountSummaryWhereUniqueInput[]
    disconnect?: AccountSummaryWhereUniqueInput | AccountSummaryWhereUniqueInput[]
    delete?: AccountSummaryWhereUniqueInput | AccountSummaryWhereUniqueInput[]
    connect?: AccountSummaryWhereUniqueInput | AccountSummaryWhereUniqueInput[]
    update?: AccountSummaryUpdateWithWhereUniqueWithoutTradingAccountInput | AccountSummaryUpdateWithWhereUniqueWithoutTradingAccountInput[]
    updateMany?: AccountSummaryUpdateManyWithWhereWithoutTradingAccountInput | AccountSummaryUpdateManyWithWhereWithoutTradingAccountInput[]
    deleteMany?: AccountSummaryScalarWhereInput | AccountSummaryScalarWhereInput[]
  }

  export type TradingAccountCreateNestedOneWithoutTradesInput = {
    create?: XOR<TradingAccountCreateWithoutTradesInput, TradingAccountUncheckedCreateWithoutTradesInput>
    connectOrCreate?: TradingAccountCreateOrConnectWithoutTradesInput
    connect?: TradingAccountWhereUniqueInput
  }

  export type TradeNoteCreateNestedManyWithoutTradeInput = {
    create?: XOR<TradeNoteCreateWithoutTradeInput, TradeNoteUncheckedCreateWithoutTradeInput> | TradeNoteCreateWithoutTradeInput[] | TradeNoteUncheckedCreateWithoutTradeInput[]
    connectOrCreate?: TradeNoteCreateOrConnectWithoutTradeInput | TradeNoteCreateOrConnectWithoutTradeInput[]
    createMany?: TradeNoteCreateManyTradeInputEnvelope
    connect?: TradeNoteWhereUniqueInput | TradeNoteWhereUniqueInput[]
  }

  export type TradeNoteUncheckedCreateNestedManyWithoutTradeInput = {
    create?: XOR<TradeNoteCreateWithoutTradeInput, TradeNoteUncheckedCreateWithoutTradeInput> | TradeNoteCreateWithoutTradeInput[] | TradeNoteUncheckedCreateWithoutTradeInput[]
    connectOrCreate?: TradeNoteCreateOrConnectWithoutTradeInput | TradeNoteCreateOrConnectWithoutTradeInput[]
    createMany?: TradeNoteCreateManyTradeInputEnvelope
    connect?: TradeNoteWhereUniqueInput | TradeNoteWhereUniqueInput[]
  }

  export type EnumTradeTypeFieldUpdateOperationsInput = {
    set?: $Enums.TradeType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTradeEntryFieldUpdateOperationsInput = {
    set?: $Enums.TradeEntry
  }

  export type TradingAccountUpdateOneRequiredWithoutTradesNestedInput = {
    create?: XOR<TradingAccountCreateWithoutTradesInput, TradingAccountUncheckedCreateWithoutTradesInput>
    connectOrCreate?: TradingAccountCreateOrConnectWithoutTradesInput
    upsert?: TradingAccountUpsertWithoutTradesInput
    connect?: TradingAccountWhereUniqueInput
    update?: XOR<XOR<TradingAccountUpdateToOneWithWhereWithoutTradesInput, TradingAccountUpdateWithoutTradesInput>, TradingAccountUncheckedUpdateWithoutTradesInput>
  }

  export type TradeNoteUpdateManyWithoutTradeNestedInput = {
    create?: XOR<TradeNoteCreateWithoutTradeInput, TradeNoteUncheckedCreateWithoutTradeInput> | TradeNoteCreateWithoutTradeInput[] | TradeNoteUncheckedCreateWithoutTradeInput[]
    connectOrCreate?: TradeNoteCreateOrConnectWithoutTradeInput | TradeNoteCreateOrConnectWithoutTradeInput[]
    upsert?: TradeNoteUpsertWithWhereUniqueWithoutTradeInput | TradeNoteUpsertWithWhereUniqueWithoutTradeInput[]
    createMany?: TradeNoteCreateManyTradeInputEnvelope
    set?: TradeNoteWhereUniqueInput | TradeNoteWhereUniqueInput[]
    disconnect?: TradeNoteWhereUniqueInput | TradeNoteWhereUniqueInput[]
    delete?: TradeNoteWhereUniqueInput | TradeNoteWhereUniqueInput[]
    connect?: TradeNoteWhereUniqueInput | TradeNoteWhereUniqueInput[]
    update?: TradeNoteUpdateWithWhereUniqueWithoutTradeInput | TradeNoteUpdateWithWhereUniqueWithoutTradeInput[]
    updateMany?: TradeNoteUpdateManyWithWhereWithoutTradeInput | TradeNoteUpdateManyWithWhereWithoutTradeInput[]
    deleteMany?: TradeNoteScalarWhereInput | TradeNoteScalarWhereInput[]
  }

  export type TradeNoteUncheckedUpdateManyWithoutTradeNestedInput = {
    create?: XOR<TradeNoteCreateWithoutTradeInput, TradeNoteUncheckedCreateWithoutTradeInput> | TradeNoteCreateWithoutTradeInput[] | TradeNoteUncheckedCreateWithoutTradeInput[]
    connectOrCreate?: TradeNoteCreateOrConnectWithoutTradeInput | TradeNoteCreateOrConnectWithoutTradeInput[]
    upsert?: TradeNoteUpsertWithWhereUniqueWithoutTradeInput | TradeNoteUpsertWithWhereUniqueWithoutTradeInput[]
    createMany?: TradeNoteCreateManyTradeInputEnvelope
    set?: TradeNoteWhereUniqueInput | TradeNoteWhereUniqueInput[]
    disconnect?: TradeNoteWhereUniqueInput | TradeNoteWhereUniqueInput[]
    delete?: TradeNoteWhereUniqueInput | TradeNoteWhereUniqueInput[]
    connect?: TradeNoteWhereUniqueInput | TradeNoteWhereUniqueInput[]
    update?: TradeNoteUpdateWithWhereUniqueWithoutTradeInput | TradeNoteUpdateWithWhereUniqueWithoutTradeInput[]
    updateMany?: TradeNoteUpdateManyWithWhereWithoutTradeInput | TradeNoteUpdateManyWithWhereWithoutTradeInput[]
    deleteMany?: TradeNoteScalarWhereInput | TradeNoteScalarWhereInput[]
  }

  export type TradeCreateNestedOneWithoutTradeNotesInput = {
    create?: XOR<TradeCreateWithoutTradeNotesInput, TradeUncheckedCreateWithoutTradeNotesInput>
    connectOrCreate?: TradeCreateOrConnectWithoutTradeNotesInput
    connect?: TradeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTradeNotesInput = {
    create?: XOR<UserCreateWithoutTradeNotesInput, UserUncheckedCreateWithoutTradeNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTradeNotesInput
    connect?: UserWhereUniqueInput
  }

  export type TradeUpdateOneWithoutTradeNotesNestedInput = {
    create?: XOR<TradeCreateWithoutTradeNotesInput, TradeUncheckedCreateWithoutTradeNotesInput>
    connectOrCreate?: TradeCreateOrConnectWithoutTradeNotesInput
    upsert?: TradeUpsertWithoutTradeNotesInput
    disconnect?: TradeWhereInput | boolean
    delete?: TradeWhereInput | boolean
    connect?: TradeWhereUniqueInput
    update?: XOR<XOR<TradeUpdateToOneWithWhereWithoutTradeNotesInput, TradeUpdateWithoutTradeNotesInput>, TradeUncheckedUpdateWithoutTradeNotesInput>
  }

  export type UserUpdateOneRequiredWithoutTradeNotesNestedInput = {
    create?: XOR<UserCreateWithoutTradeNotesInput, UserUncheckedCreateWithoutTradeNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTradeNotesInput
    upsert?: UserUpsertWithoutTradeNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTradeNotesInput, UserUpdateWithoutTradeNotesInput>, UserUncheckedUpdateWithoutTradeNotesInput>
  }

  export type TradingAccountCreateNestedOneWithoutAccountSummariesInput = {
    create?: XOR<TradingAccountCreateWithoutAccountSummariesInput, TradingAccountUncheckedCreateWithoutAccountSummariesInput>
    connectOrCreate?: TradingAccountCreateOrConnectWithoutAccountSummariesInput
    connect?: TradingAccountWhereUniqueInput
  }

  export type TradingAccountUpdateOneRequiredWithoutAccountSummariesNestedInput = {
    create?: XOR<TradingAccountCreateWithoutAccountSummariesInput, TradingAccountUncheckedCreateWithoutAccountSummariesInput>
    connectOrCreate?: TradingAccountCreateOrConnectWithoutAccountSummariesInput
    upsert?: TradingAccountUpsertWithoutAccountSummariesInput
    connect?: TradingAccountWhereUniqueInput
    update?: XOR<XOR<TradingAccountUpdateToOneWithWhereWithoutAccountSummariesInput, TradingAccountUpdateWithoutAccountSummariesInput>, TradingAccountUncheckedUpdateWithoutAccountSummariesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSettingTypeFieldUpdateOperationsInput = {
    set?: $Enums.SettingType
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTradeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeType | EnumTradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeTypeFilter<$PrismaModel> | $Enums.TradeType
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTradeEntryFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeEntry | EnumTradeEntryFieldRefInput<$PrismaModel>
    in?: $Enums.TradeEntry[] | ListEnumTradeEntryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeEntry[] | ListEnumTradeEntryFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeEntryFilter<$PrismaModel> | $Enums.TradeEntry
  }

  export type NestedEnumTradeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeType | EnumTradeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeType[] | ListEnumTradeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeTypeWithAggregatesFilter<$PrismaModel> | $Enums.TradeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTradeTypeFilter<$PrismaModel>
    _max?: NestedEnumTradeTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumTradeEntryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TradeEntry | EnumTradeEntryFieldRefInput<$PrismaModel>
    in?: $Enums.TradeEntry[] | ListEnumTradeEntryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradeEntry[] | ListEnumTradeEntryFieldRefInput<$PrismaModel>
    not?: NestedEnumTradeEntryWithAggregatesFilter<$PrismaModel> | $Enums.TradeEntry
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTradeEntryFilter<$PrismaModel>
    _max?: NestedEnumTradeEntryFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumSettingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SettingType | EnumSettingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SettingType[] | ListEnumSettingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SettingType[] | ListEnumSettingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSettingTypeFilter<$PrismaModel> | $Enums.SettingType
  }

  export type NestedEnumSettingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SettingType | EnumSettingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SettingType[] | ListEnumSettingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SettingType[] | ListEnumSettingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSettingTypeWithAggregatesFilter<$PrismaModel> | $Enums.SettingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSettingTypeFilter<$PrismaModel>
    _max?: NestedEnumSettingTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TradingAccountCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    accountNumber: string
    brokerName?: string | null
    currency?: string
    isActive?: boolean
    isDefault?: boolean
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trades?: TradeCreateNestedManyWithoutTradingAccountInput
    accountSummaries?: AccountSummaryCreateNestedManyWithoutTradingAccountInput
  }

  export type TradingAccountUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    accountNumber: string
    brokerName?: string | null
    currency?: string
    isActive?: boolean
    isDefault?: boolean
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trades?: TradeUncheckedCreateNestedManyWithoutTradingAccountInput
    accountSummaries?: AccountSummaryUncheckedCreateNestedManyWithoutTradingAccountInput
  }

  export type TradingAccountCreateOrConnectWithoutUserInput = {
    where: TradingAccountWhereUniqueInput
    create: XOR<TradingAccountCreateWithoutUserInput, TradingAccountUncheckedCreateWithoutUserInput>
  }

  export type TradingAccountCreateManyUserInputEnvelope = {
    data: TradingAccountCreateManyUserInput | TradingAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TradeNoteCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    convictionBefore?: number | null
    emotionAfter?: number | null
    category?: string | null
    tags?: string | null
    isPrivate?: boolean
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trade?: TradeCreateNestedOneWithoutTradeNotesInput
  }

  export type TradeNoteUncheckedCreateWithoutUserInput = {
    id?: string
    tradeId?: string | null
    title: string
    content: string
    convictionBefore?: number | null
    emotionAfter?: number | null
    category?: string | null
    tags?: string | null
    isPrivate?: boolean
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TradeNoteCreateOrConnectWithoutUserInput = {
    where: TradeNoteWhereUniqueInput
    create: XOR<TradeNoteCreateWithoutUserInput, TradeNoteUncheckedCreateWithoutUserInput>
  }

  export type TradeNoteCreateManyUserInputEnvelope = {
    data: TradeNoteCreateManyUserInput | TradeNoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type TradingAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: TradingAccountWhereUniqueInput
    update: XOR<TradingAccountUpdateWithoutUserInput, TradingAccountUncheckedUpdateWithoutUserInput>
    create: XOR<TradingAccountCreateWithoutUserInput, TradingAccountUncheckedCreateWithoutUserInput>
  }

  export type TradingAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: TradingAccountWhereUniqueInput
    data: XOR<TradingAccountUpdateWithoutUserInput, TradingAccountUncheckedUpdateWithoutUserInput>
  }

  export type TradingAccountUpdateManyWithWhereWithoutUserInput = {
    where: TradingAccountScalarWhereInput
    data: XOR<TradingAccountUpdateManyMutationInput, TradingAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type TradingAccountScalarWhereInput = {
    AND?: TradingAccountScalarWhereInput | TradingAccountScalarWhereInput[]
    OR?: TradingAccountScalarWhereInput[]
    NOT?: TradingAccountScalarWhereInput | TradingAccountScalarWhereInput[]
    id?: StringFilter<"TradingAccount"> | string
    userId?: StringFilter<"TradingAccount"> | string
    name?: StringFilter<"TradingAccount"> | string
    description?: StringNullableFilter<"TradingAccount"> | string | null
    accountNumber?: StringFilter<"TradingAccount"> | string
    brokerName?: StringNullableFilter<"TradingAccount"> | string | null
    currency?: StringFilter<"TradingAccount"> | string
    isActive?: BoolFilter<"TradingAccount"> | boolean
    isDefault?: BoolFilter<"TradingAccount"> | boolean
    color?: StringNullableFilter<"TradingAccount"> | string | null
    icon?: StringNullableFilter<"TradingAccount"> | string | null
    createdAt?: DateTimeFilter<"TradingAccount"> | Date | string
    updatedAt?: DateTimeFilter<"TradingAccount"> | Date | string
  }

  export type TradeNoteUpsertWithWhereUniqueWithoutUserInput = {
    where: TradeNoteWhereUniqueInput
    update: XOR<TradeNoteUpdateWithoutUserInput, TradeNoteUncheckedUpdateWithoutUserInput>
    create: XOR<TradeNoteCreateWithoutUserInput, TradeNoteUncheckedCreateWithoutUserInput>
  }

  export type TradeNoteUpdateWithWhereUniqueWithoutUserInput = {
    where: TradeNoteWhereUniqueInput
    data: XOR<TradeNoteUpdateWithoutUserInput, TradeNoteUncheckedUpdateWithoutUserInput>
  }

  export type TradeNoteUpdateManyWithWhereWithoutUserInput = {
    where: TradeNoteScalarWhereInput
    data: XOR<TradeNoteUpdateManyMutationInput, TradeNoteUncheckedUpdateManyWithoutUserInput>
  }

  export type TradeNoteScalarWhereInput = {
    AND?: TradeNoteScalarWhereInput | TradeNoteScalarWhereInput[]
    OR?: TradeNoteScalarWhereInput[]
    NOT?: TradeNoteScalarWhereInput | TradeNoteScalarWhereInput[]
    id?: StringFilter<"TradeNote"> | string
    tradeId?: StringNullableFilter<"TradeNote"> | string | null
    userId?: StringFilter<"TradeNote"> | string
    title?: StringFilter<"TradeNote"> | string
    content?: StringFilter<"TradeNote"> | string
    convictionBefore?: IntNullableFilter<"TradeNote"> | number | null
    emotionAfter?: IntNullableFilter<"TradeNote"> | number | null
    category?: StringNullableFilter<"TradeNote"> | string | null
    tags?: StringNullableFilter<"TradeNote"> | string | null
    isPrivate?: BoolFilter<"TradeNote"> | boolean
    isPinned?: BoolFilter<"TradeNote"> | boolean
    createdAt?: DateTimeFilter<"TradeNote"> | Date | string
    updatedAt?: DateTimeFilter<"TradeNote"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    emailVerified?: Date | string | null
    image?: string | null
    registeredAt?: Date | string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectedAt?: Date | string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    tradingAccounts?: TradingAccountCreateNestedManyWithoutUserInput
    tradeNotes?: TradeNoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    emailVerified?: Date | string | null
    image?: string | null
    registeredAt?: Date | string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectedAt?: Date | string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tradingAccounts?: TradingAccountUncheckedCreateNestedManyWithoutUserInput
    tradeNotes?: TradeNoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tradingAccounts?: TradingAccountUpdateManyWithoutUserNestedInput
    tradeNotes?: TradeNoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tradingAccounts?: TradingAccountUncheckedUpdateManyWithoutUserNestedInput
    tradeNotes?: TradeNoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    emailVerified?: Date | string | null
    image?: string | null
    registeredAt?: Date | string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectedAt?: Date | string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    tradingAccounts?: TradingAccountCreateNestedManyWithoutUserInput
    tradeNotes?: TradeNoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    emailVerified?: Date | string | null
    image?: string | null
    registeredAt?: Date | string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectedAt?: Date | string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    tradingAccounts?: TradingAccountUncheckedCreateNestedManyWithoutUserInput
    tradeNotes?: TradeNoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    tradingAccounts?: TradingAccountUpdateManyWithoutUserNestedInput
    tradeNotes?: TradeNoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    tradingAccounts?: TradingAccountUncheckedUpdateManyWithoutUserNestedInput
    tradeNotes?: TradeNoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTradingAccountsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    emailVerified?: Date | string | null
    image?: string | null
    registeredAt?: Date | string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectedAt?: Date | string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    tradeNotes?: TradeNoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTradingAccountsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    emailVerified?: Date | string | null
    image?: string | null
    registeredAt?: Date | string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectedAt?: Date | string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tradeNotes?: TradeNoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTradingAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTradingAccountsInput, UserUncheckedCreateWithoutTradingAccountsInput>
  }

  export type TradeCreateWithoutTradingAccountInput = {
    id?: string
    openTime: string
    ticket: string
    type: $Enums.TradeType
    size: number
    instrument: string
    price: number
    exitPrice?: number | null
    orderId?: string | null
    comment?: string | null
    entry: $Enums.TradeEntry
    commission?: number
    fee?: number
    swap?: number
    profit?: number
    notes?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tradeNotes?: TradeNoteCreateNestedManyWithoutTradeInput
  }

  export type TradeUncheckedCreateWithoutTradingAccountInput = {
    id?: string
    openTime: string
    ticket: string
    type: $Enums.TradeType
    size: number
    instrument: string
    price: number
    exitPrice?: number | null
    orderId?: string | null
    comment?: string | null
    entry: $Enums.TradeEntry
    commission?: number
    fee?: number
    swap?: number
    profit?: number
    notes?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tradeNotes?: TradeNoteUncheckedCreateNestedManyWithoutTradeInput
  }

  export type TradeCreateOrConnectWithoutTradingAccountInput = {
    where: TradeWhereUniqueInput
    create: XOR<TradeCreateWithoutTradingAccountInput, TradeUncheckedCreateWithoutTradingAccountInput>
  }

  export type TradeCreateManyTradingAccountInputEnvelope = {
    data: TradeCreateManyTradingAccountInput | TradeCreateManyTradingAccountInput[]
    skipDuplicates?: boolean
  }

  export type AccountSummaryCreateWithoutTradingAccountInput = {
    date: string
    currency?: string
    closedPnL: number
    balance: number
    equity: number
    previousBalance?: number
    previousEquity?: number
    totalCreditFacility?: number
    floatingPnL?: number
    marginRequirements?: number
    availableMargin?: number
    createdAt?: Date | string
  }

  export type AccountSummaryUncheckedCreateWithoutTradingAccountInput = {
    id?: number
    date: string
    currency?: string
    closedPnL: number
    balance: number
    equity: number
    previousBalance?: number
    previousEquity?: number
    totalCreditFacility?: number
    floatingPnL?: number
    marginRequirements?: number
    availableMargin?: number
    createdAt?: Date | string
  }

  export type AccountSummaryCreateOrConnectWithoutTradingAccountInput = {
    where: AccountSummaryWhereUniqueInput
    create: XOR<AccountSummaryCreateWithoutTradingAccountInput, AccountSummaryUncheckedCreateWithoutTradingAccountInput>
  }

  export type AccountSummaryCreateManyTradingAccountInputEnvelope = {
    data: AccountSummaryCreateManyTradingAccountInput | AccountSummaryCreateManyTradingAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTradingAccountsInput = {
    update: XOR<UserUpdateWithoutTradingAccountsInput, UserUncheckedUpdateWithoutTradingAccountsInput>
    create: XOR<UserCreateWithoutTradingAccountsInput, UserUncheckedCreateWithoutTradingAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTradingAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTradingAccountsInput, UserUncheckedUpdateWithoutTradingAccountsInput>
  }

  export type UserUpdateWithoutTradingAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tradeNotes?: TradeNoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTradingAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tradeNotes?: TradeNoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TradeUpsertWithWhereUniqueWithoutTradingAccountInput = {
    where: TradeWhereUniqueInput
    update: XOR<TradeUpdateWithoutTradingAccountInput, TradeUncheckedUpdateWithoutTradingAccountInput>
    create: XOR<TradeCreateWithoutTradingAccountInput, TradeUncheckedCreateWithoutTradingAccountInput>
  }

  export type TradeUpdateWithWhereUniqueWithoutTradingAccountInput = {
    where: TradeWhereUniqueInput
    data: XOR<TradeUpdateWithoutTradingAccountInput, TradeUncheckedUpdateWithoutTradingAccountInput>
  }

  export type TradeUpdateManyWithWhereWithoutTradingAccountInput = {
    where: TradeScalarWhereInput
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyWithoutTradingAccountInput>
  }

  export type TradeScalarWhereInput = {
    AND?: TradeScalarWhereInput | TradeScalarWhereInput[]
    OR?: TradeScalarWhereInput[]
    NOT?: TradeScalarWhereInput | TradeScalarWhereInput[]
    id?: StringFilter<"Trade"> | string
    tradingAccountId?: StringFilter<"Trade"> | string
    openTime?: StringFilter<"Trade"> | string
    ticket?: StringFilter<"Trade"> | string
    type?: EnumTradeTypeFilter<"Trade"> | $Enums.TradeType
    size?: FloatFilter<"Trade"> | number
    instrument?: StringFilter<"Trade"> | string
    price?: FloatFilter<"Trade"> | number
    exitPrice?: FloatNullableFilter<"Trade"> | number | null
    orderId?: StringNullableFilter<"Trade"> | string | null
    comment?: StringNullableFilter<"Trade"> | string | null
    entry?: EnumTradeEntryFilter<"Trade"> | $Enums.TradeEntry
    commission?: FloatFilter<"Trade"> | number
    fee?: FloatFilter<"Trade"> | number
    swap?: FloatFilter<"Trade"> | number
    profit?: FloatFilter<"Trade"> | number
    notes?: StringNullableFilter<"Trade"> | string | null
    tags?: StringNullableFilter<"Trade"> | string | null
    createdAt?: DateTimeFilter<"Trade"> | Date | string
    updatedAt?: DateTimeFilter<"Trade"> | Date | string
  }

  export type AccountSummaryUpsertWithWhereUniqueWithoutTradingAccountInput = {
    where: AccountSummaryWhereUniqueInput
    update: XOR<AccountSummaryUpdateWithoutTradingAccountInput, AccountSummaryUncheckedUpdateWithoutTradingAccountInput>
    create: XOR<AccountSummaryCreateWithoutTradingAccountInput, AccountSummaryUncheckedCreateWithoutTradingAccountInput>
  }

  export type AccountSummaryUpdateWithWhereUniqueWithoutTradingAccountInput = {
    where: AccountSummaryWhereUniqueInput
    data: XOR<AccountSummaryUpdateWithoutTradingAccountInput, AccountSummaryUncheckedUpdateWithoutTradingAccountInput>
  }

  export type AccountSummaryUpdateManyWithWhereWithoutTradingAccountInput = {
    where: AccountSummaryScalarWhereInput
    data: XOR<AccountSummaryUpdateManyMutationInput, AccountSummaryUncheckedUpdateManyWithoutTradingAccountInput>
  }

  export type AccountSummaryScalarWhereInput = {
    AND?: AccountSummaryScalarWhereInput | AccountSummaryScalarWhereInput[]
    OR?: AccountSummaryScalarWhereInput[]
    NOT?: AccountSummaryScalarWhereInput | AccountSummaryScalarWhereInput[]
    id?: IntFilter<"AccountSummary"> | number
    tradingAccountId?: StringFilter<"AccountSummary"> | string
    date?: StringFilter<"AccountSummary"> | string
    currency?: StringFilter<"AccountSummary"> | string
    closedPnL?: FloatFilter<"AccountSummary"> | number
    balance?: FloatFilter<"AccountSummary"> | number
    equity?: FloatFilter<"AccountSummary"> | number
    previousBalance?: FloatFilter<"AccountSummary"> | number
    previousEquity?: FloatFilter<"AccountSummary"> | number
    totalCreditFacility?: FloatFilter<"AccountSummary"> | number
    floatingPnL?: FloatFilter<"AccountSummary"> | number
    marginRequirements?: FloatFilter<"AccountSummary"> | number
    availableMargin?: FloatFilter<"AccountSummary"> | number
    createdAt?: DateTimeFilter<"AccountSummary"> | Date | string
  }

  export type TradingAccountCreateWithoutTradesInput = {
    id?: string
    name: string
    description?: string | null
    accountNumber: string
    brokerName?: string | null
    currency?: string
    isActive?: boolean
    isDefault?: boolean
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTradingAccountsInput
    accountSummaries?: AccountSummaryCreateNestedManyWithoutTradingAccountInput
  }

  export type TradingAccountUncheckedCreateWithoutTradesInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    accountNumber: string
    brokerName?: string | null
    currency?: string
    isActive?: boolean
    isDefault?: boolean
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accountSummaries?: AccountSummaryUncheckedCreateNestedManyWithoutTradingAccountInput
  }

  export type TradingAccountCreateOrConnectWithoutTradesInput = {
    where: TradingAccountWhereUniqueInput
    create: XOR<TradingAccountCreateWithoutTradesInput, TradingAccountUncheckedCreateWithoutTradesInput>
  }

  export type TradeNoteCreateWithoutTradeInput = {
    id?: string
    title: string
    content: string
    convictionBefore?: number | null
    emotionAfter?: number | null
    category?: string | null
    tags?: string | null
    isPrivate?: boolean
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTradeNotesInput
  }

  export type TradeNoteUncheckedCreateWithoutTradeInput = {
    id?: string
    userId: string
    title: string
    content: string
    convictionBefore?: number | null
    emotionAfter?: number | null
    category?: string | null
    tags?: string | null
    isPrivate?: boolean
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TradeNoteCreateOrConnectWithoutTradeInput = {
    where: TradeNoteWhereUniqueInput
    create: XOR<TradeNoteCreateWithoutTradeInput, TradeNoteUncheckedCreateWithoutTradeInput>
  }

  export type TradeNoteCreateManyTradeInputEnvelope = {
    data: TradeNoteCreateManyTradeInput | TradeNoteCreateManyTradeInput[]
    skipDuplicates?: boolean
  }

  export type TradingAccountUpsertWithoutTradesInput = {
    update: XOR<TradingAccountUpdateWithoutTradesInput, TradingAccountUncheckedUpdateWithoutTradesInput>
    create: XOR<TradingAccountCreateWithoutTradesInput, TradingAccountUncheckedCreateWithoutTradesInput>
    where?: TradingAccountWhereInput
  }

  export type TradingAccountUpdateToOneWithWhereWithoutTradesInput = {
    where?: TradingAccountWhereInput
    data: XOR<TradingAccountUpdateWithoutTradesInput, TradingAccountUncheckedUpdateWithoutTradesInput>
  }

  export type TradingAccountUpdateWithoutTradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: StringFieldUpdateOperationsInput | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTradingAccountsNestedInput
    accountSummaries?: AccountSummaryUpdateManyWithoutTradingAccountNestedInput
  }

  export type TradingAccountUncheckedUpdateWithoutTradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: StringFieldUpdateOperationsInput | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountSummaries?: AccountSummaryUncheckedUpdateManyWithoutTradingAccountNestedInput
  }

  export type TradeNoteUpsertWithWhereUniqueWithoutTradeInput = {
    where: TradeNoteWhereUniqueInput
    update: XOR<TradeNoteUpdateWithoutTradeInput, TradeNoteUncheckedUpdateWithoutTradeInput>
    create: XOR<TradeNoteCreateWithoutTradeInput, TradeNoteUncheckedCreateWithoutTradeInput>
  }

  export type TradeNoteUpdateWithWhereUniqueWithoutTradeInput = {
    where: TradeNoteWhereUniqueInput
    data: XOR<TradeNoteUpdateWithoutTradeInput, TradeNoteUncheckedUpdateWithoutTradeInput>
  }

  export type TradeNoteUpdateManyWithWhereWithoutTradeInput = {
    where: TradeNoteScalarWhereInput
    data: XOR<TradeNoteUpdateManyMutationInput, TradeNoteUncheckedUpdateManyWithoutTradeInput>
  }

  export type TradeCreateWithoutTradeNotesInput = {
    id?: string
    openTime: string
    ticket: string
    type: $Enums.TradeType
    size: number
    instrument: string
    price: number
    exitPrice?: number | null
    orderId?: string | null
    comment?: string | null
    entry: $Enums.TradeEntry
    commission?: number
    fee?: number
    swap?: number
    profit?: number
    notes?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tradingAccount: TradingAccountCreateNestedOneWithoutTradesInput
  }

  export type TradeUncheckedCreateWithoutTradeNotesInput = {
    id?: string
    tradingAccountId: string
    openTime: string
    ticket: string
    type: $Enums.TradeType
    size: number
    instrument: string
    price: number
    exitPrice?: number | null
    orderId?: string | null
    comment?: string | null
    entry: $Enums.TradeEntry
    commission?: number
    fee?: number
    swap?: number
    profit?: number
    notes?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TradeCreateOrConnectWithoutTradeNotesInput = {
    where: TradeWhereUniqueInput
    create: XOR<TradeCreateWithoutTradeNotesInput, TradeUncheckedCreateWithoutTradeNotesInput>
  }

  export type UserCreateWithoutTradeNotesInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    emailVerified?: Date | string | null
    image?: string | null
    registeredAt?: Date | string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectedAt?: Date | string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    tradingAccounts?: TradingAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTradeNotesInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    emailVerified?: Date | string | null
    image?: string | null
    registeredAt?: Date | string
    approvedAt?: Date | string | null
    approvedBy?: string | null
    rejectedAt?: Date | string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tradingAccounts?: TradingAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTradeNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTradeNotesInput, UserUncheckedCreateWithoutTradeNotesInput>
  }

  export type TradeUpsertWithoutTradeNotesInput = {
    update: XOR<TradeUpdateWithoutTradeNotesInput, TradeUncheckedUpdateWithoutTradeNotesInput>
    create: XOR<TradeCreateWithoutTradeNotesInput, TradeUncheckedCreateWithoutTradeNotesInput>
    where?: TradeWhereInput
  }

  export type TradeUpdateToOneWithWhereWithoutTradeNotesInput = {
    where?: TradeWhereInput
    data: XOR<TradeUpdateWithoutTradeNotesInput, TradeUncheckedUpdateWithoutTradeNotesInput>
  }

  export type TradeUpdateWithoutTradeNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    ticket?: StringFieldUpdateOperationsInput | string
    type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    size?: FloatFieldUpdateOperationsInput | number
    instrument?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    exitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    entry?: EnumTradeEntryFieldUpdateOperationsInput | $Enums.TradeEntry
    commission?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    swap?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tradingAccount?: TradingAccountUpdateOneRequiredWithoutTradesNestedInput
  }

  export type TradeUncheckedUpdateWithoutTradeNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradingAccountId?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    ticket?: StringFieldUpdateOperationsInput | string
    type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    size?: FloatFieldUpdateOperationsInput | number
    instrument?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    exitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    entry?: EnumTradeEntryFieldUpdateOperationsInput | $Enums.TradeEntry
    commission?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    swap?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutTradeNotesInput = {
    update: XOR<UserUpdateWithoutTradeNotesInput, UserUncheckedUpdateWithoutTradeNotesInput>
    create: XOR<UserCreateWithoutTradeNotesInput, UserUncheckedCreateWithoutTradeNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTradeNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTradeNotesInput, UserUncheckedUpdateWithoutTradeNotesInput>
  }

  export type UserUpdateWithoutTradeNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tradingAccounts?: TradingAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTradeNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tradingAccounts?: TradingAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TradingAccountCreateWithoutAccountSummariesInput = {
    id?: string
    name: string
    description?: string | null
    accountNumber: string
    brokerName?: string | null
    currency?: string
    isActive?: boolean
    isDefault?: boolean
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTradingAccountsInput
    trades?: TradeCreateNestedManyWithoutTradingAccountInput
  }

  export type TradingAccountUncheckedCreateWithoutAccountSummariesInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    accountNumber: string
    brokerName?: string | null
    currency?: string
    isActive?: boolean
    isDefault?: boolean
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trades?: TradeUncheckedCreateNestedManyWithoutTradingAccountInput
  }

  export type TradingAccountCreateOrConnectWithoutAccountSummariesInput = {
    where: TradingAccountWhereUniqueInput
    create: XOR<TradingAccountCreateWithoutAccountSummariesInput, TradingAccountUncheckedCreateWithoutAccountSummariesInput>
  }

  export type TradingAccountUpsertWithoutAccountSummariesInput = {
    update: XOR<TradingAccountUpdateWithoutAccountSummariesInput, TradingAccountUncheckedUpdateWithoutAccountSummariesInput>
    create: XOR<TradingAccountCreateWithoutAccountSummariesInput, TradingAccountUncheckedCreateWithoutAccountSummariesInput>
    where?: TradingAccountWhereInput
  }

  export type TradingAccountUpdateToOneWithWhereWithoutAccountSummariesInput = {
    where?: TradingAccountWhereInput
    data: XOR<TradingAccountUpdateWithoutAccountSummariesInput, TradingAccountUncheckedUpdateWithoutAccountSummariesInput>
  }

  export type TradingAccountUpdateWithoutAccountSummariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: StringFieldUpdateOperationsInput | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTradingAccountsNestedInput
    trades?: TradeUpdateManyWithoutTradingAccountNestedInput
  }

  export type TradingAccountUncheckedUpdateWithoutAccountSummariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: StringFieldUpdateOperationsInput | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trades?: TradeUncheckedUpdateManyWithoutTradingAccountNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type TradingAccountCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    accountNumber: string
    brokerName?: string | null
    currency?: string
    isActive?: boolean
    isDefault?: boolean
    color?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TradeNoteCreateManyUserInput = {
    id?: string
    tradeId?: string | null
    title: string
    content: string
    convictionBefore?: number | null
    emotionAfter?: number | null
    category?: string | null
    tags?: string | null
    isPrivate?: boolean
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradingAccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: StringFieldUpdateOperationsInput | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trades?: TradeUpdateManyWithoutTradingAccountNestedInput
    accountSummaries?: AccountSummaryUpdateManyWithoutTradingAccountNestedInput
  }

  export type TradingAccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: StringFieldUpdateOperationsInput | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trades?: TradeUncheckedUpdateManyWithoutTradingAccountNestedInput
    accountSummaries?: AccountSummaryUncheckedUpdateManyWithoutTradingAccountNestedInput
  }

  export type TradingAccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: StringFieldUpdateOperationsInput | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    color?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeNoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    convictionBefore?: NullableIntFieldUpdateOperationsInput | number | null
    emotionAfter?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trade?: TradeUpdateOneWithoutTradeNotesNestedInput
  }

  export type TradeNoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    convictionBefore?: NullableIntFieldUpdateOperationsInput | number | null
    emotionAfter?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeNoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tradeId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    convictionBefore?: NullableIntFieldUpdateOperationsInput | number | null
    emotionAfter?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeCreateManyTradingAccountInput = {
    id?: string
    openTime: string
    ticket: string
    type: $Enums.TradeType
    size: number
    instrument: string
    price: number
    exitPrice?: number | null
    orderId?: string | null
    comment?: string | null
    entry: $Enums.TradeEntry
    commission?: number
    fee?: number
    swap?: number
    profit?: number
    notes?: string | null
    tags?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountSummaryCreateManyTradingAccountInput = {
    id?: number
    date: string
    currency?: string
    closedPnL: number
    balance: number
    equity: number
    previousBalance?: number
    previousEquity?: number
    totalCreditFacility?: number
    floatingPnL?: number
    marginRequirements?: number
    availableMargin?: number
    createdAt?: Date | string
  }

  export type TradeUpdateWithoutTradingAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    ticket?: StringFieldUpdateOperationsInput | string
    type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    size?: FloatFieldUpdateOperationsInput | number
    instrument?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    exitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    entry?: EnumTradeEntryFieldUpdateOperationsInput | $Enums.TradeEntry
    commission?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    swap?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tradeNotes?: TradeNoteUpdateManyWithoutTradeNestedInput
  }

  export type TradeUncheckedUpdateWithoutTradingAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    ticket?: StringFieldUpdateOperationsInput | string
    type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    size?: FloatFieldUpdateOperationsInput | number
    instrument?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    exitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    entry?: EnumTradeEntryFieldUpdateOperationsInput | $Enums.TradeEntry
    commission?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    swap?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tradeNotes?: TradeNoteUncheckedUpdateManyWithoutTradeNestedInput
  }

  export type TradeUncheckedUpdateManyWithoutTradingAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    openTime?: StringFieldUpdateOperationsInput | string
    ticket?: StringFieldUpdateOperationsInput | string
    type?: EnumTradeTypeFieldUpdateOperationsInput | $Enums.TradeType
    size?: FloatFieldUpdateOperationsInput | number
    instrument?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    exitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    entry?: EnumTradeEntryFieldUpdateOperationsInput | $Enums.TradeEntry
    commission?: FloatFieldUpdateOperationsInput | number
    fee?: FloatFieldUpdateOperationsInput | number
    swap?: FloatFieldUpdateOperationsInput | number
    profit?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountSummaryUpdateWithoutTradingAccountInput = {
    date?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    closedPnL?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    equity?: FloatFieldUpdateOperationsInput | number
    previousBalance?: FloatFieldUpdateOperationsInput | number
    previousEquity?: FloatFieldUpdateOperationsInput | number
    totalCreditFacility?: FloatFieldUpdateOperationsInput | number
    floatingPnL?: FloatFieldUpdateOperationsInput | number
    marginRequirements?: FloatFieldUpdateOperationsInput | number
    availableMargin?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountSummaryUncheckedUpdateWithoutTradingAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    closedPnL?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    equity?: FloatFieldUpdateOperationsInput | number
    previousBalance?: FloatFieldUpdateOperationsInput | number
    previousEquity?: FloatFieldUpdateOperationsInput | number
    totalCreditFacility?: FloatFieldUpdateOperationsInput | number
    floatingPnL?: FloatFieldUpdateOperationsInput | number
    marginRequirements?: FloatFieldUpdateOperationsInput | number
    availableMargin?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountSummaryUncheckedUpdateManyWithoutTradingAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    closedPnL?: FloatFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    equity?: FloatFieldUpdateOperationsInput | number
    previousBalance?: FloatFieldUpdateOperationsInput | number
    previousEquity?: FloatFieldUpdateOperationsInput | number
    totalCreditFacility?: FloatFieldUpdateOperationsInput | number
    floatingPnL?: FloatFieldUpdateOperationsInput | number
    marginRequirements?: FloatFieldUpdateOperationsInput | number
    availableMargin?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeNoteCreateManyTradeInput = {
    id?: string
    userId: string
    title: string
    content: string
    convictionBefore?: number | null
    emotionAfter?: number | null
    category?: string | null
    tags?: string | null
    isPrivate?: boolean
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TradeNoteUpdateWithoutTradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    convictionBefore?: NullableIntFieldUpdateOperationsInput | number | null
    emotionAfter?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTradeNotesNestedInput
  }

  export type TradeNoteUncheckedUpdateWithoutTradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    convictionBefore?: NullableIntFieldUpdateOperationsInput | number | null
    emotionAfter?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeNoteUncheckedUpdateManyWithoutTradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    convictionBefore?: NullableIntFieldUpdateOperationsInput | number | null
    emotionAfter?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}