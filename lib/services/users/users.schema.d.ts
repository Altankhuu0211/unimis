import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
export declare const usersSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    lastname: import("@sinclair/typebox").TString<string>;
    firstname: import("@sinclair/typebox").TString<string>;
    password: import("@sinclair/typebox").TString<string>;
    permission: import("@sinclair/typebox").TNumber;
    card_number: import("@sinclair/typebox").TNumber;
}>;
export type Users = Static<typeof usersSchema>;
export declare const usersValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const usersResolver: import("@feathersjs/schema").Resolver<{
    id: string;
    password: string;
    lastname: string;
    firstname: string;
    permission: number;
    card_number: number;
}, HookContext>;
export declare const usersExternalResolver: import("@feathersjs/schema").Resolver<{
    id: string;
    password: string;
    lastname: string;
    firstname: string;
    permission: number;
    card_number: number;
}, HookContext>;
export declare const usersDataSchema: import("@sinclair/typebox").TObject<{
    password: import("@sinclair/typebox").TString<string>;
    lastname: import("@sinclair/typebox").TString<string>;
    firstname: import("@sinclair/typebox").TString<string>;
    permission: import("@sinclair/typebox").TNumber;
    card_number: import("@sinclair/typebox").TNumber;
}>;
export type UsersData = Static<typeof usersDataSchema>;
export declare const usersDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const usersDataResolver: import("@feathersjs/schema").Resolver<{
    id: string;
    password: string;
    lastname: string;
    firstname: string;
    permission: number;
    card_number: number;
}, HookContext>;
export declare const usersPatchSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    lastname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    firstname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    permission: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    card_number: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export type UsersPatch = Static<typeof usersPatchSchema>;
export declare const usersPatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const usersPatchResolver: import("@feathersjs/schema").Resolver<{
    id: string;
    password: string;
    lastname: string;
    firstname: string;
    permission: number;
    card_number: number;
}, HookContext>;
export declare const usersQueryProperties: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TString<string>;
    password: import("@sinclair/typebox").TString<string>;
    lastname: import("@sinclair/typebox").TString<string>;
    firstname: import("@sinclair/typebox").TString<string>;
    permission: import("@sinclair/typebox").TNumber;
    card_number: import("@sinclair/typebox").TNumber;
}>;
export declare const usersQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    $skip: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    $sort: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        lastname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        firstname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        permission: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        card_number: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>>;
    $select: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<("id" | "password" | "lastname" | "firstname" | "permission" | "card_number")[]>>;
    $and: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        }>, import("@sinclair/typebox").TObject<never>]>]>>;
        password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        }>, import("@sinclair/typebox").TObject<never>]>]>>;
        lastname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        }>, import("@sinclair/typebox").TObject<never>]>]>>;
        firstname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        }>, import("@sinclair/typebox").TObject<never>]>]>>;
        permission: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
            $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        }>, import("@sinclair/typebox").TObject<never>]>]>>;
        card_number: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
            $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        }>, import("@sinclair/typebox").TObject<never>]>]>>;
    }>>, import("@sinclair/typebox").TObject<{
        $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
                $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
            }>, import("@sinclair/typebox").TObject<never>]>]>>;
            password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
                $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
            }>, import("@sinclair/typebox").TObject<never>]>]>>;
            lastname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
                $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
            }>, import("@sinclair/typebox").TObject<never>]>]>>;
            firstname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
                $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
            }>, import("@sinclair/typebox").TObject<never>]>]>>;
            permission: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
                $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
            }>, import("@sinclair/typebox").TObject<never>]>]>>;
            card_number: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
                $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
                $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
            }>, import("@sinclair/typebox").TObject<never>]>]>>;
        }>>>;
    }>]>>>;
    $or: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        }>, import("@sinclair/typebox").TObject<never>]>]>>;
        password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        }>, import("@sinclair/typebox").TObject<never>]>]>>;
        lastname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        }>, import("@sinclair/typebox").TObject<never>]>]>>;
        firstname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        }>, import("@sinclair/typebox").TObject<never>]>]>>;
        permission: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
            $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        }>, import("@sinclair/typebox").TObject<never>]>]>>;
        card_number: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
            $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        }>, import("@sinclair/typebox").TObject<never>]>]>>;
    }>>>>;
}>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    }>, import("@sinclair/typebox").TObject<never>]>]>>;
    password: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    }>, import("@sinclair/typebox").TObject<never>]>]>>;
    lastname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    }>, import("@sinclair/typebox").TObject<never>]>]>>;
    firstname: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    }>, import("@sinclair/typebox").TObject<never>]>]>>;
    permission: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
    }>, import("@sinclair/typebox").TObject<never>]>]>>;
    card_number: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $in: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        $nin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
    }>, import("@sinclair/typebox").TObject<never>]>]>>;
}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type UsersQuery = Static<typeof usersQuerySchema>;
export declare const usersQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const usersQueryResolver: import("@feathersjs/schema").Resolver<{
    $limit?: number | undefined;
    $skip?: number | undefined;
    $sort?: {
        id?: number | undefined;
        password?: number | undefined;
        lastname?: number | undefined;
        firstname?: number | undefined;
        permission?: number | undefined;
        card_number?: number | undefined;
    } | undefined;
    $select?: ("id" | "password" | "lastname" | "firstname" | "permission" | "card_number")[] | undefined;
    $and?: ({
        id?: string | {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in?: string[] | undefined;
            $nin?: string[] | undefined;
        } | undefined;
        password?: string | {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in?: string[] | undefined;
            $nin?: string[] | undefined;
        } | undefined;
        lastname?: string | {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in?: string[] | undefined;
            $nin?: string[] | undefined;
        } | undefined;
        firstname?: string | {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in?: string[] | undefined;
            $nin?: string[] | undefined;
        } | undefined;
        permission?: number | {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
            $gt?: number | undefined;
            $gte?: number | undefined;
            $lt?: number | undefined;
            $lte?: number | undefined;
            $ne?: number | undefined;
            $in?: number[] | undefined;
            $nin?: number[] | undefined;
        } | undefined;
        card_number?: number | {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
            $gt?: number | undefined;
            $gte?: number | undefined;
            $lt?: number | undefined;
            $lte?: number | undefined;
            $ne?: number | undefined;
            $in?: number[] | undefined;
            $nin?: number[] | undefined;
        } | undefined;
    } | {
        $or: {
            id?: string | {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
                $gt?: string | undefined;
                $gte?: string | undefined;
                $lt?: string | undefined;
                $lte?: string | undefined;
                $ne?: string | undefined;
                $in?: string[] | undefined;
                $nin?: string[] | undefined;
            } | undefined;
            password?: string | {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
                $gt?: string | undefined;
                $gte?: string | undefined;
                $lt?: string | undefined;
                $lte?: string | undefined;
                $ne?: string | undefined;
                $in?: string[] | undefined;
                $nin?: string[] | undefined;
            } | undefined;
            lastname?: string | {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
                $gt?: string | undefined;
                $gte?: string | undefined;
                $lt?: string | undefined;
                $lte?: string | undefined;
                $ne?: string | undefined;
                $in?: string[] | undefined;
                $nin?: string[] | undefined;
            } | undefined;
            firstname?: string | {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
                $gt?: string | undefined;
                $gte?: string | undefined;
                $lt?: string | undefined;
                $lte?: string | undefined;
                $ne?: string | undefined;
                $in?: string[] | undefined;
                $nin?: string[] | undefined;
            } | undefined;
            permission?: number | {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
                $gt?: number | undefined;
                $gte?: number | undefined;
                $lt?: number | undefined;
                $lte?: number | undefined;
                $ne?: number | undefined;
                $in?: number[] | undefined;
                $nin?: number[] | undefined;
            } | undefined;
            card_number?: number | {
                [x: string]: never;
                [x: number]: never;
                [x: symbol]: never;
                $gt?: number | undefined;
                $gte?: number | undefined;
                $lt?: number | undefined;
                $lte?: number | undefined;
                $ne?: number | undefined;
                $in?: number[] | undefined;
                $nin?: number[] | undefined;
            } | undefined;
        }[];
    })[] | undefined;
    $or?: {
        id?: string | {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in?: string[] | undefined;
            $nin?: string[] | undefined;
        } | undefined;
        password?: string | {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in?: string[] | undefined;
            $nin?: string[] | undefined;
        } | undefined;
        lastname?: string | {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in?: string[] | undefined;
            $nin?: string[] | undefined;
        } | undefined;
        firstname?: string | {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
            $gt?: string | undefined;
            $gte?: string | undefined;
            $lt?: string | undefined;
            $lte?: string | undefined;
            $ne?: string | undefined;
            $in?: string[] | undefined;
            $nin?: string[] | undefined;
        } | undefined;
        permission?: number | {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
            $gt?: number | undefined;
            $gte?: number | undefined;
            $lt?: number | undefined;
            $lte?: number | undefined;
            $ne?: number | undefined;
            $in?: number[] | undefined;
            $nin?: number[] | undefined;
        } | undefined;
        card_number?: number | {
            [x: string]: never;
            [x: number]: never;
            [x: symbol]: never;
            $gt?: number | undefined;
            $gte?: number | undefined;
            $lt?: number | undefined;
            $lte?: number | undefined;
            $ne?: number | undefined;
            $in?: number[] | undefined;
            $nin?: number[] | undefined;
        } | undefined;
    }[] | undefined;
    id?: string | {
        [x: string]: never;
        [x: number]: never;
        [x: symbol]: never;
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
    password?: string | {
        [x: string]: never;
        [x: number]: never;
        [x: symbol]: never;
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
    lastname?: string | {
        [x: string]: never;
        [x: number]: never;
        [x: symbol]: never;
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
    firstname?: string | {
        [x: string]: never;
        [x: number]: never;
        [x: symbol]: never;
        $gt?: string | undefined;
        $gte?: string | undefined;
        $lt?: string | undefined;
        $lte?: string | undefined;
        $ne?: string | undefined;
        $in?: string[] | undefined;
        $nin?: string[] | undefined;
    } | undefined;
    permission?: number | {
        [x: string]: never;
        [x: number]: never;
        [x: symbol]: never;
        $gt?: number | undefined;
        $gte?: number | undefined;
        $lt?: number | undefined;
        $lte?: number | undefined;
        $ne?: number | undefined;
        $in?: number[] | undefined;
        $nin?: number[] | undefined;
    } | undefined;
    card_number?: number | {
        [x: string]: never;
        [x: number]: never;
        [x: symbol]: never;
        $gt?: number | undefined;
        $gte?: number | undefined;
        $lt?: number | undefined;
        $lte?: number | undefined;
        $ne?: number | undefined;
        $in?: number[] | undefined;
        $nin?: number[] | undefined;
    } | undefined;
} & {}, HookContext>;
